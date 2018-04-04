import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pagetitle: string = 'Purchase Request System';
  currentUser: User;
  users: User[];

  constructor(private UserSvc: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.UserSvc.List().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }
}
