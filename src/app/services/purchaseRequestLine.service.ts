import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequestLine } from '../models/purchaseRequestLine';

const url = 'http://localhost:54659/PurchaseRequestsLine/';

@Injectable()
export class PurchaseRequestLineService {
  List(): Observable<PurchaseRequestLine[]> {
    return this.http.get(url + 'List') as Observable<PurchaseRequestLine[]>;
  }
  Get(Id: string): Observable<PurchaseRequestLine> {
    return this.http.get(url + 'Get/' + Id) as Observable<PurchaseRequestLine>;
  }
  Create(purchaseRequestLine: PurchaseRequestLine): Observable<any> {
    return this.http.post(url + 'Create', purchaseRequestLine) as Observable<any>;
  }
  Change(purchaseRequestLine: PurchaseRequestLine): Observable<any> {
    return this.http.post(url + 'Change', purchaseRequestLine) as Observable<any>;
  }
  Remove(purchaseRequestLine: PurchaseRequestLine): Observable<any> {
    return this.http.post(url + 'Remove', purchaseRequestLine) as Observable<any>;
  }

  constructor(private http: HttpClient) {}
}
