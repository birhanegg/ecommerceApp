import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SellerService } from '../../../../services/seller.service';
// import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private sellerService: SellerService) { }

  addForm: FormGroup;

  ngOnInit(): void {
    let user = localStorage.getItem('userId');
    let sellerId = user;
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      catagory: ['', Validators.required],
      price: ['', Validators.required],
      imageName: ['', Validators.required],
      description: ['', Validators.required],
      sellerId: sellerId   ///////static for now need to get from login
    });
  }

  onSubmit() {
    //console.log(this.addForm.value);
    this.sellerService.addProduct(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['seller/manage-products']);
      });
  }

}
