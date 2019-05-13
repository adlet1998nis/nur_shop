import { BrowserModule } from '@angular/platform-browser';
import {ClassProvider, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ProviderService} from './shared/services/provider.service';
import {AuthInterceptor} from './AuthInterceptor';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
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
