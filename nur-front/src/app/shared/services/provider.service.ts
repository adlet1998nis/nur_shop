import { Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {ICategory} from '../models/ICategory';
import {IProductsByCategory} from '../models/IProductsByCategory';
import {IProduct} from '../models/IProduct';
import {IAuthResponse} from '../models/IAuthResponse';
import {IBasket} from '../models/IBasket';
import {IHistory} from '../models/IHistory';

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

  getProductsByCategory(id: number): Promise<IProductsByCategory> {
    return this.get(`http://localhost:8000/api/categories/${id}/`, {});
  }

  getProductsAll(): Promise <IProduct[]> {
    return this.get('http://localhost:8000/api/products/', {});
  }

  getProductDetail(id: number): Promise <IProduct> {
    return this.get(`http://localhost:8000/api/products/${id}`, {});
  }

  auth(login: string, pass: string): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: pass
    });
  }

  addToBasket(id: number) {
    return this.post('http://127.0.0.1:8000/api/basket/', {
      product_id: id
    });
  }

  getBasket(): Promise<IBasket> {
    return this.get('http://127.0.0.1:8000/api/basket/', {});
  }

  orderBasket() {
    return this.post('http://127.0.0.1:8000/api/order/', {});
  }

  logout() {
    return this.post('http://127.0.0.1:8000/api/logout/', {});
  }

  getHistory(): Promise<IHistory[]> {
    return this.get('http://127.0.0.1:8000/api/history/', {});
  }

  createProduct(id: number, title: string, price: number, desk: string): Promise <IProduct> {
    return this.post(`http://localhost:8000/api/productAdmin/`, {
      category_id: id,
      title: title,
      price: price,
      desk: desk,
    });
  }

  getProductsForAdmin(): Promise<IProduct[]>{
    console.log("de")
    return this.get(`http://localhost:8000/api/productAdmin/`, {
    });
  }

  deleteProduct(id: number): Promise <any>{
    return this.delet(`http://localhost:8000/api/productAdmin/${id}/`,{});
  }

  updateProduct(id: number, title: string, price: number, desk: string): Promise <IProduct>{
    return this.put(`http://localhost:8000/api/productAdmin/${id}/`,{
      title: title,
      price: price,
      description: desk,
    });
  }


}
