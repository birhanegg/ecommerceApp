import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { SellerService } from '../../../../services/seller.service';
import { Product } from '../../../../common/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private sellerService: SellerService) { }

  ngOnInit(): void {
    let productId = window.localStorage.getItem("editProductId");
    if (!productId) {
      alert("Invalid action.")
      this.router.navigate(['seller/manage-products']);
      return;
    }
    this.editForm = this.formBuilder.group({
      _id: [''],
      createDate: [''],
      title: ['', Validators.required],
      catagoryId: ['', Validators.required],
      price: ['', Validators.required],
      imageName: ['', Validators.required],
      descreption: ['', Validators.required],
      status: [''],
      sellerId: '5ee773e74f720d6af4eed445'
    });
    this.sellerService.getProductById(productId)
      .subscribe(data => {
        //let temp = data.result.birthDate;
       // data.result.birthDate = this.pipe.transform(temp, 'yyyy-MM-dd');
        delete data.__v;
        //console.log("**** from angular" + data.result);
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.sellerService.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          
            this.router.navigate(['seller/manage-products']);
          
        },
        error => {
          alert(error);
        });
  }

}
