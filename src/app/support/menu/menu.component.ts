import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu("Home", "/home", "Home Page"),
    new Menu("Users", "/users/list", "User List Display Page"),
    new Menu("About", "/about", "About Page")
  ];

  constructor() { }

  ngOnInit() {
  }

}
