import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequest } from '../models/purchaseRequest';

const url = 'http://localhost:54659/PurchaseRequests/';

@Injectable()
export class PurchaseRequestService {

  ReviewList(): Observable<PurchaseRequest[]> {
    return this.http.get(url + 'ReviewList') as Observable<PurchaseRequest[]>;
  }

  List(): Observable<PurchaseRequest[]> {
    return this.http.get(url + 'List') as Observable<PurchaseRequest[]>;
  }
  Get(Id: string): Observable<PurchaseRequest> {
    return this.http.get(url + 'Get/' + Id) as Observable<PurchaseRequest>;
  }
  Create(purchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Create', purchaseRequest) as Observable<any>;
  }
  Change(purchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Change', purchaseRequest) as Observable<any>;
  }
  Remove(purchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Remove', purchaseRequest) as Observable<any>;
  }

  constructor(private http: HttpClient) {}
}
