import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../common/userResponse';


@Injectable({
  providedIn: 'root'
})
export class authenticationService{

  private baseUrl = 'http://localhost:3000/auth/signin'

  private signUp = 'http://localhost:3000/signup'

  private ckecksSellerStatusUrl = 'http://localhost:3000/user/status/'

  constructor(private httpClient: HttpClient) { }

  login(login : any) : Observable<any> {
    console.log("insed login serveice ")
    return this.httpClient.post<any>(this.baseUrl,login);
  }

  addUser(user : User): Observable<any> {
    return this.httpClient.post<any>(this.signUp ,user);
  }

  getToken() : String {
    return window.localStorage.getItem("token");
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }
  
  getSellerStatusById(id : String) : Observable<any> {
    return this.httpClient.get<any>(this.ckecksSellerStatusUrl +  id);
  }
}
