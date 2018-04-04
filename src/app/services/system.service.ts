import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

const baseUrl = 'http://localhost:58248';

export class SystemService {
  isDevMode: boolean = true;
  setDevMode(): void {
    this.isDevMode = true;
    this.debug('DevMode is on.');
  }
  clearDevMode(): void {
    this.isDevMode = false;
    this.debug('DevMode is off.');
  }

  debug(message, message2 = null, message3 = null) {
    if (this.isDevMode) {
      if (message3 != null) console.log(message, message2, message3);
      else if (message2 != null) console.log(message, message2);
      else console.log(message);
    }
  }

  canReview: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get getIsLogin(): Observable<boolean> {
    return this.isLogin;
  }
  setIsLogin() {
    this.isLogin.next(true);
  }
  setNotLogin() {
    this.isLogin.next(false);
  }

  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  getLoggedInUser(): User {
    return this.loggedInUser.value;
  }

  constructor() {}

  setLoggedInUser(user: User): void {
    this.loggedInUser.next(user);
    this.canReview.next(user.IsReviewer);
    console.log('Logged in user set:', this.loggedInUser);
  }
  clearLoggedInUser(): void {
    this.loggedInUser.next(null);
    this.canReview.next(false);
    console.log('Logged in user cleared:', this.loggedInUser);
  }
  get isLoggedIn(): boolean {
    console.log('Logged in user query:', this.loggedInUser != null);
    return this.loggedInUser != null;
  }
  url(
    controller: string,
    method: string,
    seg1: string = null,
    seg2: string = null
  ): string {
    let aUrl = baseUrl + '/' + controller + '/' + method + '/';
    aUrl += seg1 != null ? seg1 + '/' : '';
    aUrl += seg2 != null ? seg2 + '/' : '';
    return aUrl;
  }
}
