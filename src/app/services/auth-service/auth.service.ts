import {
  AngularFirestoreCollection,
  AngularFirestore
} from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  public isAnonymous: any;
  public uid: any;
  public philiscool: boolean;

  constructor() {
    this.setCallback();
  }

  public signIn() {
    console.log("trying signin");
    this.philiscool = true;
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // Handle Errors here.
        console.log("error on login");
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      });
    console.log("done with signIn");
  }

  private setUID(theuid: string) {
    this.uid = theuid;
  }

  private setCallback() {
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        self.isAnonymous = user.isAnonymous;
        self.uid = user.uid;
        console.log(`uid = ${self.uid}`);
        // ...
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }
}
