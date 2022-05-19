import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
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
import { MatButtonModule, } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { Cards2Component } from './cards2/cards2.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';



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
                   LoginComponent,
                   ContactComponent,
                   EmployeeComponent
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
