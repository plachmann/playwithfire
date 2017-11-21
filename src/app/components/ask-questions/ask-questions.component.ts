import { StorageService } from "../../services/storage-service/storage.service";
import { ItemService } from "../../services/item-service/item.service";
import { AuthService } from "../../services/auth-service/auth.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Item, Test, MyItem, MyTest } from "../../models/item";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import "rxjs/add/operator/map";

interface Question {
  questiontext: string;
  questionweight: number;
  questioncategory: string;
}

interface Answer {
  answertext: string;
  answervalue: number;
}

@Component({
  selector: "app-ask-questions",
  templateUrl: "./ask-questions.component.html",
  styleUrls: ["./ask-questions.component.css"]
})
export class AskQuestionsComponent implements OnInit {
  first: boolean = true;
  last: boolean = false;
  done: boolean = false;

  isQuizDone: boolean = false;

  myTest: MyTest;
  finalScore: number;

  questionsCol: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;
  questionArray: Question[];

  answersCol: AngularFirestoreCollection<Answer>;
  answers: Observable<Answer[]>;
  answerArray: Answer[];

  currentQuestion: Question = {
    questiontext: "",
    questioncategory: "",
    questionweight: 0
  };

  constructor(
    private afs: AngularFirestore,
    private itemService: ItemService,
    private storageService: StorageService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.signIn();

    this.questionsCol = this.afs.collection("srfp-questions");
    this.questions = this.questionsCol.valueChanges();
    this.answersCol = this.afs.collection("srfp-answers", ref =>
      ref.orderBy("sequence")
    );
    this.answers = this.answersCol.valueChanges();
    this.getQuestionArray();
    this.getAnswerArray();
  }

  public startTest() {
    // use the authService to get this users id.
    // populate the document with it
    // add the document
    this.first = false;
    this.myTest = new MyTest();
    this.myTest.userid = this.authService.uid;
    this.myTest.items = new Array();
    this.itemService.addItem(this.myTest);
  }

  public passTheSalt(answer: string, value: number) {
    console.log("salt passed");
    if (this.questionArray.length === 0) {
      this.last = true;
      console.log("last question");
    }
    if (!this.last) {
      this.submitTestResponses(answer, value);
      this.GetNextQuestion();
    } else {
      this.isQuizDone = true;
      console.log("do last action");
      this.submitTestResponses(answer, value);
      this.CalcScore();
    }
  }

  private CalcScore() {
    let score = 0;
    for (let item of this.myTest.items) {
      score += item.answervalue * item.questionweight;
    }
    this.finalScore = score;
  }

  private submitTestResponses(answer: string, value: number) {
    // get the values
    // add to myTest
    // update firestore
    let newItem = new MyItem();
    newItem.questiontext = this.currentQuestion.questiontext;
    newItem.questionweight = this.currentQuestion.questionweight;
    newItem.answertext = answer;
    newItem.answervalue = value;
    this.myTest.items.push(newItem);
    this.itemService.addItem(this.myTest);
    console.log("added");
  }

  private getQuestionArray() {
    this.questions.subscribe(value => {
      this.questionArray = value;
      this.questionArray.sort(function() {
        return 0.5 - Math.random();
      });
      this.GetNextQuestion();
    });
  }

  private getAnswerArray() {
    this.answers.subscribe(value => {
      this.answerArray = value;
    });
  }

  private GetNextQuestion() {
    console.log(this.questionArray);
    this.currentQuestion = this.questionArray.pop();
  }
}
