import {IProduct} from "./IProduct";

export interface IProductCat {
  id: number;
  title: string;
  products: IProduct[];
}
