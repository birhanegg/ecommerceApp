
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-admin',
  template: `
  <h3 class="my-4">Admin Pannel</h3>
                <div class="list-group">
                    <a href="admin/" class="list-group-item">Home</a>
                    <a href="admin/view-pending-reviews" class="list-group-item">Manage Pending Reviews</a>
                    <a href="admin/view-pending-sellers" class="list-group-item">Manage Pending Sellers</a>
                </div>
  `,
  styles: []
})
export class AdminSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
