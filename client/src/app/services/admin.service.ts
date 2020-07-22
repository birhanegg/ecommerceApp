import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../common/review';
import { Observable } from 'rxjs/index';
import { ApiResponse } from '../common/api.response';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  adminURL: string = 'http://localhost:3000/admin/';

  getReviews(): Observable<any> {
    console.log(this.http.get(this.adminURL + 'pendingReviews'))
    return this.http.get(this.adminURL + 'pendingReviews');
  }

  approveReview(id: string): Observable<ApiResponse> {
   // console.log(this.baseUrl + 'pendingReviews/' + id);
    return this.http.post<ApiResponse>(this.adminURL + 'pendingReviews/' + id, id);
  }

  denyReview(id: string): Observable<any> {
    return this.http.delete(this.adminURL + 'pendingReviews/' + id);
  }

  getSellers(): Observable<any> {
    return this.http.get(this.adminURL + 'pendingSellers');
  }

  approveSeller(id: string): Observable<ApiResponse> {
    console.log(this.adminURL + 'pendingSellers/' + id);
    return this.http.post<ApiResponse>(this.adminURL + 'pendingSellers/' + id, id);
  }

  denySeller(id: string): Observable<any> {
    return this.http.delete(this.adminURL + 'pendingSellers/' + id);
  }
}
