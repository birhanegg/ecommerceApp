import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Shipping } from '../../../common/shippingAddress';
import { buyerService } from '../../../services/buyer.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  submitted = false;
  shipping: Shipping;
  addressForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private buyerService: buyerService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('userId');
    let buyerId = user;
   //let buyerId = '5ee920a906927d6f944a25ee';  ////////STATIC VALUE NEED TO COME FROM LOGIN

   if (!buyerId) {
    alert("Invalid action.")
    this.router.navigate(['seller/manage-products']);
    return;
  }
  this.addressForm = this.formBuilder.group({
    
    //status: [''],
    street: ['', Validators.required],
    zipCode: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]{5}')])],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    phoneNo: ['' , [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    
    //buyerId: [buyerId]
  });
  this.buyerService.getShippingAddress(buyerId)
    .subscribe(data => {
      //let temp = data.result.birthDate;
     // data.result.birthDate = this.pipe.transform(temp, 'yyyy-MM-dd');
      delete data.__v;
      //console.log("**** from angular" + data.result);
      this.addressForm.setValue(data);
    });

  }

  get registerFormControl() {
    return this.addressForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.addressForm.valid){
    console.log(this.addressForm.value);
    this.buyerService.enterShippingAddress(this.addressForm.value)
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

}
