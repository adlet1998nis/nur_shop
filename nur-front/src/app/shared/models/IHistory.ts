import {IProduct} from './IProduct';
import {IBasketGroup} from './IBasketGroup';

export interface IHistory {
  products: IProduct[];
  basket_group: IBasketGroup;
  total_price: number;
}
