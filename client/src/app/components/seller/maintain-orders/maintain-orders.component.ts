import { Component, OnInit } from '@angular/core';
import { Order } from '../../../common/order';
import { Router } from "@angular/router";
import { SellerService } from '../../../services/seller.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-maintain-orders',
  templateUrl: './maintain-orders.component.html',
  styleUrls: ['./maintain-orders.component.css']
})
export class MaintainOrdersComponent implements OnInit {

  orders: Order[];
  

  constructor(private router: Router, private sellerService: SellerService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('userId');
    //let sellerId = localStorage.getItem('userInfo');
    this.sellerService.getOrders(user)  ///////static value added on service
    .subscribe(data => {
      this.orders = data;
      //console.log(data.result);
    });
  }

  onSubmit() {

  }

  // cancelOrder(id: string) {
  //   this.sellerService.cancelOrder(id)
  //   .pipe(first())
  //   .subscribe(
  //     data => {
        
  //       this.router.navigate(['seller/maintain-order']);
        
  //     },
  //     error => {
  //       alert(error);
  //     });
  // }

  changeOrderStatus(order: Order): void {
   // console.log(' Order id is ' + order._id);
    window.localStorage.removeItem('editOrderStatusId');
    window.localStorage.removeItem('editOrderStatusStatus');
    window.localStorage.setItem('editOrderStatusId', order._id.toString());
    window.localStorage.setItem('editOrderStatusStatus', order.status.toString());
    this.router.navigate(['seller/maintain-order/update-status']);
  }

}
