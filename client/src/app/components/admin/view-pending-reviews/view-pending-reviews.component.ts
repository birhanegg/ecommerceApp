import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Review } from 'src/app/common/review';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-view-pending-reviews',
  templateUrl: './view-pending-reviews.component.html',
  styleUrls: ['./view-pending-reviews.component.css']
})
export class ViewPendingReviewsComponent implements OnInit {

  reviews: Review[];
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getReviews()
    .subscribe(data => {
      this.reviews = data;
      //console.log(data.result);
    });
  };

  approveComment(review: Review): void {
   // this.router.navigate(['add-user']);
   this.adminService.approveReview(review._id)
   .subscribe(data => {
     this.reviews = this.reviews.filter(r => r !== review);
   });
   
  };

  declineComment(review: Review): void {
    this.adminService.denyReview(review._id)
    .subscribe(data => {
      this.reviews = this.reviews.filter(r => r !== review);
    });
  };

}
