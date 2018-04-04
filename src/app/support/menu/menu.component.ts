import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu('Home', '/home', 'Home Page'),
    new Menu('Users', '/users/list', 'User List Display Page'),
    new Menu ('Vendors', '/vendors/list', 'Vendor List Display Page'),
    new Menu('Products', '/products/list', 'Product List Display Page'),
    new Menu('Purchase Requests', '/purchaseRequests/list', 'Purchase Request List Display Page'),
    new Menu ('Review', '/purchaseRequests/review', 'Review Line Item List Display'),
    new Menu('Login/Out', '/users/login', 'The Login Page'),
    new Menu('About', '/about', 'About Page')
  ];

  constructor() { }

  ngOnInit() {
  }

}
