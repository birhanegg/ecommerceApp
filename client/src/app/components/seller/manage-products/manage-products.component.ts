import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SellerService } from '../../../services/seller.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products: Product[];
  constructor(private router: Router, private sellerService: SellerService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('userId');  ////////static replaced
    this.sellerService.getProducts(user)
    .subscribe(data => {
      this.products = data;
      //console.log(data.result);
    });
  }

  getProductsOfSeller(product: Product): void {
    this.sellerService.getProducts(product.sellerId)
    .subscribe(data => {
      this.products = data;
      //console.log(data.result);
    });
  }

  addProduct(): void {
    this.router.navigate(['seller/manage-products/add-products']);
  }

  editProduct(product: Product): void {
    window.localStorage.removeItem('editProductId');
    window.localStorage.setItem('editProductId', product._id.toString());
    this.router.navigate(['seller/manage-products/edit-products']);
  }

  deleteProduct(product: Product): void {
    console.log('user', product);
    this.sellerService.deleteProduct(product._id)
      .subscribe(data => {
        this.products = this.products.filter(u => u !== product);
      })
  };
}
