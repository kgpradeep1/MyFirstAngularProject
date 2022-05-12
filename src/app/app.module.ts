import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CarosalComponent } from './carosal/carosal.component';
import { CardsComponent } from './cards/cards.component';
import { UserServiceService } from './userservice.service';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsubComponent } from './products/productsub/productsub.component';
import { CounterComponent } from './products/counter/counter.component';
import { CounterchildComponent } from './products/counter/counterchild/counterchild.component';

import { ReactiveFormsModule } from '@angular/forms';
import { Cards2Component } from './cards2/cards2.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WishListComponent,
    CarosalComponent,
    CardsComponent,
    
    FooterComponent,
         CartComponent,
         HomeComponent,
         ProductsComponent,
         ProductComponent,
         ProductsubComponent,
         CounterComponent,
         CounterchildComponent,
         Cards2Component,
         
         SignupComponent,
                   LoginComponent
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
