import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './products/details/details.component';
import { IndexComponent } from './products/index/index.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { MainComponent } from './common/layouts/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CartComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AuthComponent, IndexComponent, NavbarComponent, MainComponent],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
