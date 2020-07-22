
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl:'./navbar.html',
  styles: ['<link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">']
})
export class NavComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    this.router.navigate(['login']);
  }

}
