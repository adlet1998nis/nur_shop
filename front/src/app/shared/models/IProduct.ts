import {ICategory} from './ICategory';


export interface IProduct {
  id: number;
  category: ICategory;
  title: string;
  price: number;
  description: string;
}
