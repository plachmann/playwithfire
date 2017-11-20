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
  isAnonymous: any;
  uid: any;

  constructor() {
    this.setCallback();
  }

  public signIn() {
    console.log("trying signin");
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

  private setCallback() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        this.isAnonymous = user.isAnonymous;
        this.uid = user.uid;
        console.log(`uid = ${this.uid}`);
        // ...
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }
}
