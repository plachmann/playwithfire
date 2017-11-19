import { StorageService } from "../../services/storage-service/storage.service";
import { ItemService } from "../../services/item-service/item.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Item } from "../../models/item";
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

  r1: Item = {
    questiontext: "Question 1",
    questionweight: 3,
    answertext: "Answer 1",
    answervalue: 2
  };

  constructor(
    private afs: AngularFirestore,
    private itemService: ItemService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.questionsCol = this.afs.collection("srfp-questions");
    this.questions = this.questionsCol.valueChanges();
    this.answersCol = this.afs.collection("srfp-answers", ref =>
      ref.orderBy("sequence")
    );
    this.answers = this.answersCol.valueChanges();
    this.getQuestionArray();
    this.getAnswerArray();
  }

  public passTheSalt() {
    console.log("salt passed");
    this.GetNextQuestion();
  }

  public submitTestResponses() {
    this.itemService.addItem(this.r1);

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
    this.currentQuestion = this.questionArray.pop();
    if (this.questionArray.length === 0) {
      console.log("last question");
    }
  }
}
