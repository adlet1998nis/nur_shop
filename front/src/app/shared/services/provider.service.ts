import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MainService} from "./main.service";
import {ICategory} from "../models/ICategory";
import {IProduct} from "../models/IProduct";
import {IProductCat} from "../models/IProductCat";
import {IAuthResponse} from "../models/IAuthResponse";

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  getCategories(): Promise<ICategory[]> {
    return this.get('http://localhost:8000/api/categories/', {});
  }

  getProductsCat(id: number): Promise<IProductCat>{
    return this.get(`http://localhost:8000/api/categories/${id}/`, {});
  }

  getProductsAll(): Promise <IProduct[]>{
    return this.get('http://localhost:8000/api/products/', {});
  }

  getProductDetail(id: number): Promise <IProduct>{
    return this.get(`http://localhost:8000/api/products/${id}`, {});
  }

  auth(login: string, pass: string): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: pass
    });
  }

  addToBasket(id: number){
    return this.post('http://localhost:8000/api/basket/', {
      product_id: id;
    });
  }

}
