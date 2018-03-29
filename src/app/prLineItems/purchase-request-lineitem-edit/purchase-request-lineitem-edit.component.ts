import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { PurchaseRequestLineItemService } from "../../services/purchaseRequestLineItem.service";
import { PurchaseRequestLineItem } from "../../models/purchaseRequestLineItem";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { SystemService } from "../../services/system.service";

@Component({
  selector: "app-purchase-request-lineitem-edit",
  templateUrl: "./purchase-request-lineitem-edit.component.html",
  styleUrls: ["./purchase-request-lineitem-edit.component.css"]
})
export class PurchaseRequestLineitemEditComponent implements OnInit {
  pagetitle: string = "Purchase Request Line Item Edit";

  constructor() {}

  ngOnInit() {}
}
