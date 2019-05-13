import { Component, OnInit } from '@angular/core';
import {ProviderService} from "../shared/services/provider.service";
import {IProduct} from "../shared/models/IProduct";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {ICategory} from "../shared/models/ICategory";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: IProduct;
  public id: number;
  public isLogged = false;
  constructor(
    private provider: ProviderService,
    private router: ActivatedRoute,
    // private location: Location
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
    this.id = parseInt(this.router.snapshot.paramMap.get('id'), 10);
    this.provider.getProductDetail(this.id).then(res => {
      console.log(this.product)
      this.product = res;
    });
  }

  addToBasket(){

  }
  // navigateBack() {
  //   this.location.back();
  // }

}
