import {IUser} from './IUser';


export interface IBasketGroup {
  id: number;
  user: IUser;
  basket_group_id: number;
  created_at: string;
}
