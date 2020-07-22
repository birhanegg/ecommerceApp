import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {buyerService} from '../../services/buyer.service';
import {Product} from '../../common/product';
import { Router } from "@angular/router";
import { CartInfo } from 'src/app/common/buyer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cartInfo : CartInfo;
  buyerId : any;
  products: Product[];
  constructor(private router: Router, private productService: ProductService, private buyerService :buyerService) { }

  ngOnInit() {
    this.listProducts();
    let id = window.localStorage.getItem('userId');
    this.buyerId = id;

  }

   listProducts() {
    this.productService.getProductList().subscribe(
          data => { this.products = data; }
    );
  }

  addCart(items: Product)  {

    alert("Product has been add to Cart");
      // this.cartInfo.productId = items._id;
      // this.cartInfo.buyerId = this.buyerId;
      console.log("Cart Info: " + items._id)
      this.buyerService.addToShoppingCart(this.buyerId, items._id).subscribe(res => res);
      console.log(items._id);
  }

  viewDetail(id : any) {
    window.localStorage.removeItem("productId");
    window.localStorage.setItem("productId", id.toString());
    this.router.navigate(['viewProduct']);
  }
}
