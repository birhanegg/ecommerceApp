import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Notifications } from '../../../common/notifications'
import { from } from 'rxjs';
import { buyerService } from '../../../services/buyer.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notifications[];
  constructor(private router: Router, private buyerService: buyerService) { }

  ngOnInit(): void {
    this.buyerService.getNotifications()
    .subscribe(data => {
      this.notifications = data;
      console.log(this.notifications);
    });
  }

}
