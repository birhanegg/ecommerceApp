import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Payment } from '../../../common/payment';
import { buyerService } from '../../../services/buyer.service';

@Component({
  selector: 'app-payment-settings',
  templateUrl: './payment-settings.component.html',
  styleUrls: ['./payment-settings.component.css']
})
export class PaymentSettingsComponent implements OnInit {

  payment: Payment;
  paymentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private buyerService: buyerService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('userId');
    let buyerId = user; ///////Should get from session login
   // console.log(user);
    if (!buyerId) {
      alert("Invalid action.")
      //this.router.navigate(['seller/manage-products']);
      return;
    }
    this.paymentForm = this.formBuilder.group({
      
      
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      phoneNo: [''],
      nameOnCard: [''],
      cardNumber: [''],
      cvv: [''],
      expiryDate: [''],
      buyerId: [buyerId]
    });
    this.buyerService.getPaymentInfo(buyerId)
      .subscribe(data => {
        //let temp = data.result.birthDate;
       // data.result.birthDate = this.pipe.transform(temp, 'yyyy-MM-dd');
        delete data.__v;
        //console.log("**** from angular" + data.result);
        this.paymentForm.setValue(data);
      });

  }

  onSubmit() {
    console.log(this.paymentForm.value);
    this.buyerService.enterPaymentInfo(this.paymentForm.value)
    .pipe(first())
    .subscribe(
      data => {
        
          this.router.navigate(['buyer/']);
        
      },
      error => {
        alert(error);
      });
  }


}
