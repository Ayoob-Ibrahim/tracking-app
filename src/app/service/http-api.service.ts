import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { authservice } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) { }


  http_post_without_token(url: string, body: any): Observable<object> {
    return this.http.post(url, body).pipe(
      map(this.extractData),
      catchError(this.handleDeleteError)
    )
  }

  private extractData = (res: any) => {
    const body = res;
    return body || {};
  }


  private handleDeleteError = async (error: any) => {
    if (error['error']['error'] == "Unauthorized") {
    }
    return error;
  }


  http_post_with_body(url: string, body: any): Observable<object> {
    return this.http.post(url, body,).pipe(
      map(this.extractData),
      catchError(this.handleDeleteError)
    )
  }


}
