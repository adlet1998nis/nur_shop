import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {IProductInBasket} from '../shared/models/IProductInBasket';
import {IProduct} from '../shared/models/IProduct';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  public productsInBasket: IProductInBasket[];
  public totalPrice = 0;

  constructor(
    private provider: ProviderService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.provider.getBasket().then(res => {
      this.productsInBasket = res.products;
      this.totalPrice = res.total_price;
    });
  }

  orderBasket() {
    this.provider.orderBasket();
    this.productsInBasket = null;
    this.location.back();
  }


}
