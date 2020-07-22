import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Payment } from '../../../common/payment';
import { buyerService } from '../../../services/buyer.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  buyerId : any;
  totalPrice : any;
  payment: Payment;
  checkoutForm: FormGroup;
  shippingForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private buyerService: buyerService) { }

  ngOnInit(): void {
    let buyerId = '5ee920a906927d6f944a25ee'; ///////Should get from session login
    let price = window.localStorage.getItem('totalPrice');
    this.totalPrice = price;

    let user = localStorage.getItem('userId');
    this.buyerId = user;


    if (!buyerId) {
      alert("Invalid action.")
      this.router.navigate(['seller/manage-products']);
      return;
    }
    this.checkoutForm = this.formBuilder.group({

      //status: [''],

      nameOnCard: [''],
      cardNumber: [''],
      cvv: [''],
      expiryDate: [''],
      buyerId: [buyerId]
    });
    this.shippingForm = this.formBuilder.group({
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      phoneNo: ['']
    })
    this.buyerService.getPaymentInfo(buyerId)
      .subscribe(data => {
        //let temp = data.result.birthDate;
       // data.result.birthDate = this.pipe.transform(temp, 'yyyy-MM-dd');
        delete data.__v;
        //console.log("**** from angular" + data.result);
        this.checkoutForm.setValue(data);
      });

      this.buyerService.getShippingAddress(buyerId)
      .subscribe(data => {
        //let temp = data.result.birthDate;
       // data.result.birthDate = this.pipe.transform(temp, 'yyyy-MM-dd');
        delete data.__v;
        //console.log("**** from angular" + data.result);
        this.shippingForm.setValue(data);
      });

  }

  enterShippingAddress(){

      //console.log(this.checkoutForm.value);
    this.buyerService.enterShippingAddress(this.shippingForm.value)
    .pipe(first())
    .subscribe(
      data => {
        console.log('separe button');
          //this.router.navigate(['buyer/']);

      },
      error => {
        alert(error);
      });
  }

  checkout() {
    console.log("*******" + this.buyerId)
    this.buyerService.checkOut(this.buyerId)
    .subscribe(data => {
    alert("Items are successfully checked out");
    });
   }



}
