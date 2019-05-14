import {IProduct} from './IProduct';

export interface IProductInBasket {
  id: number;
  product: IProduct;
  quantity: number;
  basket_group_id: number;
  user: number;
}
