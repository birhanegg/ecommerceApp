import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {buyerService} from '../../services/buyer.service';
import {Product} from '../../common/product';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-categorized-product',
  templateUrl: './categorized-product.component.html',
  styleUrls: ['./categorized-product.component.css']
})
export class CategorizedProductComponent implements OnInit {

  products: Product[];
  mySubscription: any;
  
  constructor(private router: Router, private productService: ProductService, private buyerService :buyerService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
   }

  ngOnInit(): void {
    let categoryId = window.localStorage.getItem('categoryName');
    this.productService.getProductByCategory(categoryId)
    .subscribe(data =>{
      this.products = data;
    })
  }

  addCart(items: Product)  {
    this.buyerService.addToShoppingCart(items._id).subscribe(res => res);
    console.log(items._id);
}

viewDetail(id : any) {
  window.localStorage.removeItem("productId");
  window.localStorage.setItem("productId", id.toString());
  this.router.navigate(['viewProduct']);
}

  ngOnDestroy(){
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
