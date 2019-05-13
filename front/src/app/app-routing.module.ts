import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
