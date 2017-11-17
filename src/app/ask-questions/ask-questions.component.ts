import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
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

interface TestResponse {
  questiontext: string;
  questionweight: number;
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

  constructor(private afs: AngularFirestore) {}

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
