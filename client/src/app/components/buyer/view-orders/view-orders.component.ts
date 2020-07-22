import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Order } from '../../../common/order';
import { buyerService } from '../../../services/buyer.service';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from  'jspdf-autotable';


interface jsPDFWITHPlugin extends jspdf{
   autoTable:(options: UserOptions)=> jspdf
}

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  orders: Order[];
  printable: any;

  constructor(private router: Router, private buyerService: buyerService) {
  }

  ngOnInit(): void {
    let user = localStorage.getItem('userId');
    //let buyerId = user;
    //console.log(user + '/////////////////////')
    let buyerId = user; ///////////////////NEEDS To bE changed static from login
    //console.log(buyerId);
    this.buyerService.getOrdersByBuyerId(buyerId)
      .subscribe(data => {
        this.orders = data;
        //console.log(data.result);
      });

  }

  printToPdf() {

    let userName = localStorage.getItem('userName');
    let userId = localStorage.getItem('userId');
    // let buyerId = user;
    //alert(userName)
    //alert(userId)
    this.buyerService.getOrdersByBuyerId(userId)
      .subscribe(data => {
      this.orders = data;
        const doc = new jspdf('portrait', 'px', 'a3') as jsPDFWITHPlugin;

      //  doc.text('---------------------------------------------'+'/n', 10, 40);
       // doc.text('             MIU OnlineShop                  '+'/n', 10, 10);
       // doc.text('---------------------------------------------'+'/n', 10, 10);
        doc.text('customer :' + userName, 10, 10);
        doc.text('---------------------Customer Info Billing ', 15, 27);


      //  doc.text('Date :' + new Date(), 10, 16);

        data.forEach(function (value) {
            console.log(value.shippedDate);
          //  for (let x in value){
              doc.autoTable({
                head: [['productName', 'price', 'orderDate', 'shippingAddress', 'status']],
                body: [
                  [value._id, value.price, value.orderDate, value.shippingAddress.city, value.status]

                ]
              })





          // }


          });


         doc.save('final.pdf')
    }
  )


    // const doc = new jspdf('portrait', 'px', 'a4') as jsPDFWITHPlugin;
    //
    // doc.autoTable({
    //   head: [['name', 'email', 'other']],
    //   body: [
    //     ['Benj', 'ben@gmail.com', 'USA'],
    //     ['amir', 'am@it', 'USA']
    //   ]
    // })
    //
    // doc.save("hti.pdf")




  }

}


    // let buyerId = '5ee920a906927d6f944a25ee'; ///////////////////NEEDS To bE changed static from login
    // this.buyerService.getOrdersByBuyerId(buyerId)
    //   .subscribe(data => {
       // this.orders = data;

        // const doc = new jsPDF('portrait','px','a4') as jsPDFWITHPlugin;
        //
        // doc.autotable({
        //    head: [['name', 'email','other']],
        //   body:[
        //     ['Benj','ben@gmail.com','USA'],
        //     ['amir','am@it','USA']
        //   ]
        // })




        //
        // data.forEach(function (value) {
        //   console.log(value.shippedDate);
        //   for (let x in value.shippedDate){
        //
        //     doc.text(x, 17,15)
        //   }
        //
        //
        // });


        // doc.setFontSize(40);
        // doc.text(35, 25, data.map(function(e){
        //   return e.join("\t");
        // }).join("\n"));


          //  doc.save('pod.pdf')

         // console.log(data)








    //  });

    // console.log('this is it -----')
    //      doc.save('amir.pdf')
  //}

//}
