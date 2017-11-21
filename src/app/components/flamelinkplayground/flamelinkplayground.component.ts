import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import flamelink from "flamelink";
import { environment } from "../../../environments/environment";

export const firebaseConfig = environment.firebaseConfig;
@Component({
  selector: "app-flamelinkplayground",
  templateUrl: "./flamelinkplayground.component.html",
  styleUrls: ["./flamelinkplayground.component.css"]
})
export class FlamelinkplaygroundComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const app = flamelink({ firebaseApp });

    app.content
      .get("schemaDemo")
      .then(products => console.log("All of your products:", products))
      .catch(error => console.log("flamelink error"));
  }
}
