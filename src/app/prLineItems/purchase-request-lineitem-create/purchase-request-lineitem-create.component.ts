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
  selector: "app-purchase-request-lineitem-create",
  templateUrl: "./purchase-request-lineitem-create.component.html",
  styleUrls: ["./purchase-request-lineitem-create.component.css"]
})
export class PurchaseRequestLineitemCreateComponent implements OnInit {
  pagetitle: string = "Purchase Request Line Item Create";
  purchaseRequestLineItem: PurchaseRequestLineItem = new PurchaseRequestLineItem(
    0,
    0,
    "",
    "true",
    ""
  );
  products: Product[];
  purchaseRequests: PurchaseRequest[];

  constructor(
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private UserSvc: UserService,
    private Sys: SystemService,
    private router: Router
  ) {}

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    console.log("this.purchaseRequestLineItem", this.purchaseRequestLineItem);
    this.PurchaseRequestLineItemSvc.Create(this.purchaseRequestLineItem).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/purchaseRequestLineItems/list");
    });
  }

  ngOnInit() {
    this.ProductSvc.List().subscribe(products => {
      this.products = products;
      console.log("Products", this.products);
    });
  }
}
