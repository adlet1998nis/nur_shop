import { Component, OnInit } from '@angular/core';
import {ICategory} from '../shared/models/ICategory';
import {IProductsByCategory} from '../shared/models/IProductsByCategory';
import {IProduct} from '../shared/models/IProduct';
import {ProviderService} from '../shared/services/provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public categories: ICategory[] = [];
  public products: IProduct[] = [];
  public productsByCategoryStructure: IProductsByCategory;
  public isLogged = false;
  public isAdminLogged = false;

  constructor(
    private provider: ProviderService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('Token')){
      this.isLogged = true;
    }
    this.provider.getCategories().then(res => {
      this.categories = res;
    });
    this.provider.getProductsAll().then(res => {
      this.products = res;
    });
  }

  getProductsByCategory(id: number) {
    this.provider.getProductsByCategory(id).then(res => {
      this.productsByCategoryStructure = res;
      this.products = this.productsByCategoryStructure.products;
    });
  }

  goToBasket() {
    this.router.navigateByUrl('basket');
  }

  goToHistory() {
    this.router.navigateByUrl('history');
  }

  logout() {
    this.provider.logout();
    localStorage.removeItem('Token');
    this.isLogged = false;
  }

  login() {
    this.router.navigateByUrl('auth');
  }

}
