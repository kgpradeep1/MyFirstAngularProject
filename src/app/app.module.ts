import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CarosalComponent } from './carosal/carosal.component';
import { CardsComponent } from './cards/cards.component';

import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsubComponent } from './products/productsub/productsub.component';
import { CounterComponent } from './products/counter/counter.component';
import { CounterchildComponent } from './products/counter/counterchild/counterchild.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormDemoComponent } from './form-demo/form-demo.component';


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
         FormDemoComponent,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
