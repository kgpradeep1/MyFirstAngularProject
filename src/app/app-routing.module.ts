import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FormDemoComponent } from './form-demo/form-demo.component';





const routes: Routes = [
  {path:'cart',component:CartComponent},
   {path:'' ,component:HomeComponent },
   {path:'products',component:ProductsComponent},
   {path:'formdemocomponent',component:FormDemoComponent}
   
  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
