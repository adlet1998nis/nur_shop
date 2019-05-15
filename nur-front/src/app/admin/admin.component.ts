import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {IProduct} from '../shared/models/IProduct';
import {ICategory} from '../shared/models/ICategory';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public categories: ICategory[] = []
  public products: IProduct[] = []
  public title: string;
  public price: number;
  public desk: string;
  public tmpCategId: number;

  constructor(
    private provider: ProviderService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.provider.getProductsForAdmin().then(res => {
      this.products = res;
    });
    this.provider.getCategories().then(res => {
      this.categories = res;
    });
  }

  createProduct(id: number) {
    if (id != null) {
      this.provider.createProduct(id, this.title, this.price, this.desk).then(res => {
          this.ngOnInit();
        }
      );
    } else {
      alert('Category is necessarily!');
    }
  }

  deleteProduct(id: number) {
    this.provider.deleteProduct(id).then(res => {
      this.ngOnInit();
    });
  }

  updateProduct(id: number) {
    this.provider.updateProduct(id, this.title, this.price, this.desk).then(res => {
      this.products.splice(id, 1, res);
      this.title = null;
      this.price = null;
      this.desk = null;
      this.ngOnInit();
    });
  }

  logout() {
    this.provider.logout();
    localStorage.removeItem('Token');
    this.router.navigateByUrl('');
  }


  tmpProduct(id: number) {
    this.tmpCategId = id;
  }
}
