import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Details } from 'src/app/model/model'
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseURL: string = "http://localhost:3000/";
  // private http: HttpClient;
  constructor(private http: HttpClient,) { }

  completePayment(details: Details): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(details);
    return this.http.post(this.baseURL + 'details', body, { 'headers': headers })
  }
}
