import {
  AngularFirestoreCollection,
  AngularFirestore
} from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { Item, Test, MyItem, MyTest } from "../../models/item";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Test>;
  items: Observable<Test[]>;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection("TestResponses");
  }

  addItem(item: MyTest) {
    let a = JSON.stringify(item);
    this.itemsCollection.doc(item.userid).set(JSON.parse(JSON.stringify(item)));
  }
}
