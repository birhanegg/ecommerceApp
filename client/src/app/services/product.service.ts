import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:3000/products/'

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  getAProduct(id : any) : Observable<any> {
    return this.httpClient.get(this.baseUrl+id)
  }

  getProductByCategory(id : any ) : Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "category/" + id);
  }

}

// interface GetResponse {
//   _embedded:{
//     products: Product[];
//   }
//
// }
