
import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../services/buyer.service';
import {Cart} from '../../common/Cart';
  import { from } from 'rxjs';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: Cart[];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCart();
  }

  shoppingCart() {
    this.shoppingCartService.getShoppingCart().subscribe(
          data => { this.cart = data; }
    );
  }

}
