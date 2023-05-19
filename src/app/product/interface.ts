import { IProduct } from "../home";
import { IImageSlider } from "../shared/components";

export interface IProductVariant {
  id: number;
  product: IProduct;
  name: string;
  price: number;
  listPrice: number;// 原来的售价
  productVariantImages: IImageSlider[];
}

export interface IGroupOrder {
  id: number;
  productId: number;
  startBy: string; // 由谁发起
  avatar: string;
  startAt: Date;
  remainingNumber: number; // 还差几人拼成
}

