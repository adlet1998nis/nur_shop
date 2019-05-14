import {IProduct} from './IProduct';

export interface IProductsByCategory {
  id: number;
  title: string;
  products: IProduct[];
}
