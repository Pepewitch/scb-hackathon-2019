export interface Item {
  name: string;
  createdAt: Date;
  price: number;
  owner: string;
}

export interface UserBought {
  name: string;
  count: number;
}

export interface Pool {
  name: string;
  createdAt: Date;
  item: Item[];
  bought: UserBought[];
  pricePerCount: number;
}
