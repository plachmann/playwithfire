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

  currentQuestion: Question;
  buttonText = "Next";
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.questionsCol = this.afs.collection("srfp-questions");
    this.questions = this.questionsCol.valueChanges();
    this.answersCol = this.afs.collection("srfp-answers");
    this.answers = this.answersCol.valueChanges();
    this.getQuestionArray();
  }

  private getQuestionArray() {
    this.questions.subscribe(value => {
      this.questionArray = value;
      this.GetNextQuestion();
    });
  }

  private GetNextQuestion() {
    this.currentQuestion = this.questionArray.pop();
    if (this.questionArray.length === 0) {
      this.buttonText = "Submit";
    }
  }
}
