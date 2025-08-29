export interface Image {
    url_570xN: string;
}

export interface Item {
    listing_id: number;
    url?: string;
    MainImage?: Image;
    title: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
}

export default interface ItemInterface {
    item: Item;
}