import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {ICategory} from '../shared/models/ICategory';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../shared/models/IProduct';
import {IProductCat} from '../shared/models/IProductCat';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public categories: ICategory[] = [];
  public productCat: IProductCat;
  public products: IProduct[] = [];
  public pressed = false;
  public pressedPar = false;
  public isLogged = false;
  constructor(
    private provider: ProviderService,
    // private route: ActivatedRoute,
    // private location: Location
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
    this.provider.getCategories().then(res => {
      this.categories = res;
    });
  }
  getProducts(id: number) {
    this.pressedPar = false;
    this.pressed = true;
    if (id) {
      this.provider.getProductsCat(id).then(res => {
        this.productCat = res;
        this.products = this.productCat.products;
      });
    }
  }

  getProductsAll(){
    this.pressedPar = true;
    this.pressed = false;
    this.provider.getProductsAll().then(res => {
      this.products = res;
    });
  }
}
