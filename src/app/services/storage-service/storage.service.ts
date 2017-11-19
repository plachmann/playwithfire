import {
  AngularFirestoreCollection,
  AngularFirestore
} from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import * as firebase from "firebase";

@Injectable()
export class StorageService {
  constructor(public afs: AngularFirestore) {
    // Get a reference to the storage service, which is used to create references in your storage bucket
    let storage = firebase.storage();

    // Create a storage reference from our storage service
    let storageRef = storage.ref();

    let message = "This is my message.";

    storageRef
      .putString(message)
      .then(function(snapshot) {
        console.log("Uploaded a raw string!");
      })
      .then(function() {
        console.log("then");
      })
      .catch(function() {
        console.log("Problem with Nike");
      });
  }
}
