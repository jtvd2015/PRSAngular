import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../services/system.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User(0, '', '', '', '', '', '', false, false, false);
  message: string = '';

  constructor(
    private UserSvc: UserService,
    private SysSvc: SystemService,
    private router: Router
  ) { }

  login(): void {
    console.log(this.user);
    this.UserSvc.Login(this.user.UserName, this.user.Password)
    .subscribe(res => {
      if(res.Result.toUpperCase() === 'SUCCESS') {
      this.user = res.Data;
      this.SysSvc.setNotLogin();
      this.SysSvc.setLoggedInUser(this.user);
      console.log('Login Successful:', res.Message);
      this.router.navigateByUrl('/home');
      } else {
        console.error('Login Failed:', res.Message);
        this.message = res.Message;
      }
    });
  }

  ngOnInit() {
    this.SysSvc.setIsLogin();
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.

  }

}
