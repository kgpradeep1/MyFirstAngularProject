import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 // isShowAddProduct = false;
   
 // toggleAddProduct() {
   // this.isShowAddProduct = !this.isShowAddProduct;
 // }
  isShowDivIf = false;
  
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  addProduct($event: any) { 
  
    //this.p = $event;  
    //this.p=($event);
    this.products.push($event)
   
    }  
    p:any=[];
  
  constructor() { }
 products:Product[]= [
    {
      "id": 1,
      "title": "Apple Iphone 13 pro max ",
      "price": 109999,
      "description": "iPhone 13 Pro and 13 Pro Max. Huge camera upgrades. New OLED display with ProMotion. Fastest smartphone chip ever. Breakthrough battery life.",
      "category": "Smartphone",
      "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346288",
      "rating": {
        "rate": 4.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Apple Ipad 2022 ",
      "price": 100002.00,
      "description": "The 2022 iPad Pro range is, once again, expected to come in 11-inch and 12.9-inch sizes iPad Pro is a premium professional sub-lineup of the iPad tablet computers by Apple Inc It runs iPadOS, an optimized derivation from the predecessor iOS. The original iPad Pro was introduced in September 2015 which was originally based in iOS 9",
      "category": "Tablet Tab",
      "image": "https://images.macrumors.com/t/Op-ArH_mbIDx1Bdw7scj744cuzM=/800x0/smart/article-new/2019/03/ipad-air-2022-roundup-header.png?lossy",
      "rating": {
        "rate": 4.7,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Moto Edge 30 Pro",
      "price": 50000.00,
      "description": "6.7” AMOLED. See deeper blacks and brighter colors in crystal clarity Connect your phone wirelessly8 to an external device, such as a TV or desktop display, to use your apps, make video calls",
      "category": "SmartPhone",
      "image": "https://cdn-files.kimovil.com/default/0007/06/thumb_605920_default_big.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Asus Rog Strix",
      "price": 150000.00,
      "description": "The built-in Xbox Wireless connectivity allows you to connect up to eight Xbox One controllers the built in xbox wireless connectivity allows you to connect",
      "category": "Laptop",
      "image": "https://i0.wp.com/www.techarp.com/wp-content/uploads/2018/03/2018-ASUS-Laptop-Line-Up.jpg?ssl=1",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    
   
   
  ]
  ngOnInit(): void {
    
  }

}
