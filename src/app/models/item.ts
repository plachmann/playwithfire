export interface Item {
  questiontext: string;
  questionweight: number;
  answertext: string;
  answervalue: number;
}

export interface Test {
  userid: string;
  items: {
    [key: number]: Item;
  };
}

export class MyItem implements Item {
  questiontext: string;
  questionweight: number;
  answertext: string;
  answervalue: number;
}

export class MyTest implements Test {
  userid: string;
  items: MyItem[];
}
