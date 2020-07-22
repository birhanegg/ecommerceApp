import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Seller } from 'src/app/common/seller';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-view-pending-sellers',
  templateUrl: './view-pending-sellers.component.html',
  styleUrls: ['./view-pending-sellers.component.css']
})
export class ViewPendingSellersComponent implements OnInit {

  sellers: Seller[];
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getSellers()
    .subscribe(data => {
      this.sellers = data;
    });
  };
  approveSeller(seller: Seller): void {
    // this.router.navigate(['add-user']);
    this.adminService.approveSeller(seller._id)
    .subscribe(data => {
      this.sellers = this.sellers.filter(r => r !== seller);
    });
    
   };
 
   declineSeller(seller: Seller): void {
     this.adminService.denySeller(seller._id)
     .subscribe(data => {
       this.sellers = this.sellers.filter(r => r !== seller);
     });
   };

}
