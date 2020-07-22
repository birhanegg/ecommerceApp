import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { ApiResponse } from '../common/api.response';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/seller/';

  getProducts(id: string): Observable<any> {    //////////////////Cahange to dynamic value
   // console.log(this.baseUrl + 'products/' + '5ee773e74f720d6af4eed445');
    return this.http.get(this.baseUrl + 'products/' + id);
  }


  addProduct(product: Product): Observable<any> {
    //console.log(product);
    return this.http.post<any>(this.baseUrl + 'products/', product);

  }


  getProductById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'products/edit/' + id);
  }

  updateProduct(product: Product): Observable<ApiResponse> {
    return this.http.patch<any>(this.baseUrl + 'products/edit/' + product._id, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'products/edit/' + id);
  }

  getOrders(id: string): Observable<any> {    //////////////////Cahange to dynamic value

     return this.http.get(this.baseUrl + 'orders/' + id);
   }

   getOrderStatusByOrderId(id: string): Observable<any>{
      return this.http.get(this.baseUrl + 'orders/' + 'edit/' + id);
   }

   changeOrderStatustoShipped(id: string): Observable<any>{
    return this.http.patch(this.baseUrl + 'orders/' + 'edit/' + id, id);
 }
 changeOrderStatustoDelivered(id: string): Observable<any>{
  return this.http.post(this.baseUrl + 'orders/' + 'edit/' + id, id);
}
changeOrderStatustoOnTheWay(id: string): Observable<any>{
  return this.http.put(this.baseUrl + 'orders/' + 'edit/' + id, id);
}

cancelOrder(id: string): Observable<any>{
  return this.http.delete(this.baseUrl + 'orders/' + 'edit/' + id);
}


}
