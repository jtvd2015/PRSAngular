import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Vendors } from "../models/vendor";

const url = "http://localhost:54659/Vendors/";

@Injectable()
export class VendorService {
  List(): Observable<Vendors[]> {
    return this.http.get(url+"List") as Observable<Vendors[]>;
  }
  Get(Id: string): Observable<Vendors> {
    return this.http.get(url+"Get/" + Id) as Observable<Vendors>;
  }
  Create(vendor: Vendors): Observable<any> {
    return this.http.post(url+"Create", vendor) as Observable<any>;
  }
  Change(vendor: Vendors): Observable<any> {
    return this.http.post(url+"Change", vendor) as Observable<any>;
  }
  Remove(vendor: Vendors): Observable<any> {
    return this.http.post(url+"Remove", vendor) as Observable<any>;
  }

  constructor(private http: HttpClient) {}
}
