import { Observable } from "rxjs/Rx";
import { Component, OnInit } from "@angular/core";
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
  selector: "app-philpage1",
  templateUrl: "./philpage1.component.html",
  styleUrls: ["./philpage1.component.css"]
})
export class Philpage1Component implements OnInit {
  questionsCol: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;

  answersCol: AngularFirestoreCollection<Answer>;
  answers: Observable<Answer[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.getQuestions();
    this.getAnswers();
  }

  getQuestions() {
    this.questionsCol = this.afs.collection("srfp-questions");
    this.questions = this.questionsCol.valueChanges();
  }

  getAnswers() {
    this.answersCol = this.afs.collection("srfp-answers");
    this.answers = this.answersCol.valueChanges();
  }
}
