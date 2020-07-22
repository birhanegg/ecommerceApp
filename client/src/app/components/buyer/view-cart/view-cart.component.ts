import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../common/Cart';
import { Router } from "@angular/router";
import { buyerService } from '../../../services/buyer.service';
import { Product } from 'src/app/common/product';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  buyerId: any;
  items: Cart[];
  totalPrice: Number;
  constructor(private router: Router, private buyerService: buyerService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('userId');
    let buyerId = user;
    this.buyerId = user;
    this.buyerService.getShoppingCart(buyerId)
    .subscribe(data => {
      this.items = data.items;
      this.totalPrice = data.totalPrice;
    });
  }


  deleteFromCart(item: Product)  {
    this.buyerService.deleteItem(item.productId, this.buyerId).subscribe(res => res);
    console.log(item._id);
}

  order(){
      window.localStorage.removeItem('totalPrice');
      window.localStorage.setItem('totalPrice',this.totalPrice+"");
      this.router.navigate(['buyer/checkout']);
  }

}
