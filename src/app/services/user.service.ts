import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '../services/system.service';

import { User } from '../models/user';

const url = 'http://localhost:54659/Users/';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private sys: SystemService
  ) {}

  Login(UserName: string, Password: string): Observable<any> {
    let furl = this.sys.url('Users', 'Login', UserName, Password);
    return this.http.get(url+"Login/"+UserName+"/"+Password) as Observable<any>;
  }
  List(): Observable<User[]> {
    return this.http.get(url + 'List') as Observable<User[]>;
  }
  Get(Id: string): Observable<User> {
    return this.http.get(url + 'Get/' + Id) as Observable<User>; // there is a / after the Get because there is another parameter in the route
  }
  Create(user: User): Observable<any> {
    //user: User is an instance of User
    return this.http.post(url + 'Create', user) as Observable<any>;
  }
  Change(user: User): Observable<any> {
    return this.http.post(url + 'Change', user) as Observable<any>;
  }
  Remove(user: User): Observable<any> {
    return this.http.post(url + 'Remove', user) as Observable<any>;
  }
}
