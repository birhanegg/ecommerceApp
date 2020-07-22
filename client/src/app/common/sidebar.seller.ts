
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-seller',
  template: `
  <h1 class="my-4">Seller Pannel</h1>
                <div class="list-group">
                    <a href="seller/" class="list-group-item">Home</a>
                    <a href="seller/manage-products" class="list-group-item">Manage Products</a>
                    <a href="seller/maintain-order" class="list-group-item">Mantain Orders</a>
                </div>
  `,
  styles: []
})
export class SellerSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
