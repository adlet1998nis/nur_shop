import { BrowserModule } from '@angular/platform-browser';
import {ClassProvider, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { AuthComponent } from './auth/auth.component';
import {ProviderService} from './shared/services/provider.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './AuthInterceptor';
import { BasketComponent } from './basket/basket.component';
import { HistoryComponent } from './history/history.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    AuthComponent,
    BasketComponent,
    HistoryComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    } as ClassProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
