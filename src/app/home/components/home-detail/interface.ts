export interface IAd {
  imageUrl: string;
  link: string;
}


export interface IProduct {
  id: number;
  title: string;
  imageUrl: string;
  tags: string[];
  price: number;
  priceDesc: string;
  buyerAvatars: string[];
}