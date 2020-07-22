
import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";


@Component({
  selector: 'app-side',
  template: `
  <div>
  <pre>
  
  </pre>
  <div class="alert alert-primary" role="alert">
  <hr>
  <div *ngIf="user">
  <p>Welcome {{user}} </p>
  </div>
  <hr>
  </div> 
  </div>
  <div class="alert alert-primary" role="alert">
      <a href="/buyer" class="alert-link">Profile</a>
  </div>
   
      <div class="list-group">
          <button type="button" (click)="onClick('Electronics')" class="btn btn-outline-primary" >Electronics</button>
          <button type="button" (click)="onClick('Furniture')" class="btn btn-outline-primary">Furniture</button>
          <button type="button" (click)="onClick('Books')" class="btn btn-outline-primary">Books</button>
          <button type="button" (click)="onClick('Sports')" class="btn btn-outline-primary">Sports</button>
          <button type="button" (click)="onClick('Clothing')" class="btn btn-outline-primary">Clothing</button>
          <button type="button" (click)="onClick('food')" class="btn btn-outline-primary">food</button>
      </div>
  `,
  styles: ['<link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">']
})
export class SideBarComponent implements OnInit {

  user : String = window.localStorage.getItem('userName');

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onClick(element : string){
    window.localStorage.removeItem('categoryName');
    window.localStorage.setItem('categoryName' , element);
    this.router.navigate(['categorizedView']);
  }
}
