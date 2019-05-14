import {IProductInBasket} from './IProductInBasket';

export interface IBasket {
  products: IProductInBasket[];
  total_price: number;
}
