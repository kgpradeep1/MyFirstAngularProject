import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';





const routes: Routes = [
  {path:'cart',component:CartComponent},
   {path:'' ,component:HomeComponent },
   {path:'products',component:ProductsComponent},
   {path:'login' ,component:LoginComponent},
   {path:'signup',component:SignupComponent}
   
  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
