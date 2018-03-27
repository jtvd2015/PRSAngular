import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { PurchaseRequest } from "../models/prequest";

const url = "http://localhost:54659/Users/";

@Injectable()
export class PurchaseRequestService {
  List(): Observable<PurchaseRequest[]> {
    return this.http.get(url + "List") as Observable<PurchaseRequest[]>;
  }
  Get(Id: string): Observable<PurchaseRequest> {
    return this.http.get(url + "Get/" + Id) as Observable<PurchaseRequest>;
  }
  Create(prequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + "Create", prequest) as Observable<any>;
  }
  Change(prequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + "Change", prequest) as Observable<any>;
  }
  Remove(prequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + "Remove", prequest) as Observable<any>;
  }

  constructor(private http: HttpClient) {}
}
