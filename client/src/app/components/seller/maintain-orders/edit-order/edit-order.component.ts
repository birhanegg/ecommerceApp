import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { SellerService } from '../../../../services/seller.service';
import { Order } from '../../../../common/order';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  order: Order;
  statusForm: FormGroup;
  status: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private sellerService: SellerService) { }
  orderId: string
  ngOnInit(): void {
    this.orderId = window.localStorage.getItem("editOrderStatusId");
    let status = window.localStorage.getItem("editOrderStatusStatus");
    if (!this.orderId) {
      alert("Invalid action.")
      this.router.navigate(['seller/manage-products']);
      return;
    }
    this.statusForm = this.formBuilder.group({
      status: ['']
    });
    this.sellerService.getOrderStatusByOrderId(this.orderId)///
      .subscribe(data => {
        //let temp = data.result.birthDate;
       // data.result.birthDate = this.pipe.transform(temp, 'yyyy-MM-dd');
       this.status = data.status;
       delete data.__v;
        //console.log("**** from angular" + data.result);
        this.statusForm.setValue(data.status);
      });
  }

  onSubmit() {
    console.log(this.statusForm.value.status);
    console.log(this.orderId);
    let statusidentifier = this.statusForm.value.status;
    if(statusidentifier === 'Shipped') {
      this.sellerService.changeOrderStatustoShipped(this.orderId)
      .pipe(first())
      .subscribe(
        data => {
          
          this.router.navigate(['seller/maintain-order']);
          
        },
        error => {
          alert(error);
        });
      

    }else if (statusidentifier === 'On The Way') {

      this.sellerService.changeOrderStatustoOnTheWay(this.orderId)
      .pipe(first())
      .subscribe(
        data => {
          
          this.router.navigate(['seller/maintain-order']);
          
        },
        error => {
          alert(error);
        });
        
    }
    else if (statusidentifier === 'Delivered') {

      this.sellerService.changeOrderStatustoDelivered(this.orderId)
      .pipe(first())
      .subscribe(
        data => {
          
          this.router.navigate(['seller/maintain-order']);
          
        },
        error => {
          alert(error);
        });

    }else {

    }
  //   this.sellerService.updateProduct(this.editForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
          
  //           this.router.navigate(['seller/manage-products']);
          
  //       },
  //       error => {
  //         alert(error);
  //       });
  // }

  }

  cancelOrder() {
    let statusIdentifier = this.statusForm.value.status;
    console.log(" 0000000000000" + statusIdentifier);
    //if(statusIdentifier === 'Pending'){
      this.sellerService.cancelOrder(this.orderId)
    .pipe(first())
    .subscribe(
      data => {
        
        this.router.navigate(['seller/maintain-order']);
        
      },
      error => {
        alert(error);
      });
  //}
    }
    

}
