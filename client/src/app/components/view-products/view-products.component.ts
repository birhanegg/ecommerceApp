import { Component, OnInit } from '@angular/core';
import {Product} from '../../common/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { buyerService } from '../../services/buyer.service';
import {Review} from '../../common/review';
import { CustomvalidationService } from '../../servicescustomvalidation.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
  styles : ['<link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">']
})
export class ViewProductsComponent implements OnInit {

  mySubscription: any;

  title : any;
  price : any;
  description : any;
  image : any;
  reviews : Review[];
  addForm: FormGroup;
  commenter : any;

  submitted = false;
  
  
  constructor(private formBuilder: FormBuilder, private router: Router, private productService : ProductService,private buyerService : buyerService,private customValidator: CustomvalidationService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    let productId = window.localStorage.getItem("productId");
    let userId = window.localStorage.getItem('userId');
    let name = window.localStorage.getItem('userName');
    this.commenter = name;
    if(!productId){
      alert('invalid action!')
      this.router.navigate(['product']);
      return;
    }

    this.productService.getAProduct(productId)
    .subscribe(data => {
      this.title = data.title;
      this.price = data.price;
      this.image = data.imageName;
      this.description = data.descreption;
    });

    this.buyerService.getReviewList(productId)
    .subscribe(data =>{
      this.reviews = data;
    });

    this.addForm = this.formBuilder.group({
      orderProductId : [productId, Validators.required],
      status : ['Created'],
      stars: ['', Validators.compose([Validators.required, this.customValidator.ratingValidator()])],
      comment: ['', Validators.required],
      sellerId : [ userId, Validators.required]
    });

  }

  get registerFormControl() {
    return this.addForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid){
    this.buyerService.addReview(this.addForm.value)
      .subscribe(data => {
        alert('Thank you for posting your review! we will post it as soon as it is reviewed by an admin');
        this.reviews.push(data);
        window.location.reload();
      });
    }
  }

  ngOnDestroy(){
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
