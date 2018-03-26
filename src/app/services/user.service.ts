import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

const url = "http://localhost:54659/Users/";



@Injectable()
export class UserService {
  List(): Observable<User[]> {
    return this.http.get(url+"List") as Observable<User[]>;
  }
  Get(Id: string): Observable<User> {
    return this.http.get(url+"Get/"+Id) as Observable<User>;  // there is a / after the Get because there is another parameter in the route
  }
  Create(user: User): Observable<any> {
    //user: User is an instance of User
    return this.http.post(url+"Create", user) as Observable<any>;
  }
  Change(user: User): Observable<any> {    
    return this.http.post(url+"Change", user) as Observable<any>;
  }
  Remove(user: User): Observable<any> {
    return this.http.post(url+"Remove", user) as Observable<any>;
  }

  constructor(private http: HttpClient) {}
}
