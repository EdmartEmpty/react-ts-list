export interface Item {
  listing_id: number;
  url: string;
  img: string;
  title: string;
  currency: string;
  price: string;
  quantity: number;
}

export default interface ItemInterface {
  item: Item;
}
