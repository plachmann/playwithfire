import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

interface Post {
  title: string;
  content: string;
}
@Component({
  selector: "app-fire",
  templateUrl: "./fire.component.html",
  styleUrls: ["./fire.component.css"]
})
export class FireComponent implements OnInit {
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title: string;
  content: string;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.postsCol = this.afs.collection("posts");
    this.posts = this.postsCol.valueChanges();
    this.addStuff();
  }

  addPost() {
    this.afs
      .collection("posts")
      .add({ title: this.title, content: this.content });
  }

  addStuff() {
    console.log("Adding stuff.");
    this.afs
      .collection("shoes")
      .doc("Nike")
      .set({ size: 10, model: "RunPro 11" })
      .then(function() {
        console.log("Nike 123");
      })
      .catch(function() {
        console.log("Problem with Nike");
      });
  }
}
