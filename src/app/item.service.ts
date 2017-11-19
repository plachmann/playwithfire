import {
  AngularFirestoreCollection,
  AngularFirestore
} from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { Item } from "./models/item";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection("TestResponses");
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
}
