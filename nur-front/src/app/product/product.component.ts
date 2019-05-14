import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public id;
  public product;
  public isLogged = false;

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('Token')){
      this.isLogged = true;
    }
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.provider.getProductDetail(this.id).then(res => {
      this.product = res;
    });
  }

  addToBasket(productId: number) {
    this.provider.addToBasket(productId);
    // this.router.navigateByUrl('');
  }

}
