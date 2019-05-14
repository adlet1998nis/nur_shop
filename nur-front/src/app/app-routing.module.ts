import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AuthComponent} from './auth/auth.component';
import {ProductComponent} from './product/product.component';
import {BasketComponent} from './basket/basket.component';
import {HistoryComponent} from './history/history.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'adminka', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
