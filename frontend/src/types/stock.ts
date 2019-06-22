export interface Item {
  name: string;
  createdAt: Date;
  price: number;
  owner: string;
}

export interface Stock {
  name: string;
  createdAt: Date;
  item: Item[];
  loseCount: number;
}
