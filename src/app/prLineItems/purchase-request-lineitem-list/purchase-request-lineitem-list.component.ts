import { Component, OnInit } from '@angular/core';
import { PurchaseRequestLineItemService } from "../../services/purchaseRequestLineItem.service";
import { PurchaseRequestLineItem } from "../../models/purchaseRequestLineItem";
import { SystemService } from "../../services/system.service";

@Component({
  selector: 'app-purchase-request-lineitem-list',
  templateUrl: './purchase-request-lineitem-list.component.html',
  styleUrls: ['./purchase-request-lineitem-list.component.css']
})
export class PurchaseRequestLineitemListComponent implements OnInit {
  pagetitle: string = "Purchase Request Line Item List";
  purchaseRequestLineItems: PurchaseRequestLineItem[];

  constructor(
    private Sys: SystemService,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService
  ) { }

  ngOnInit() {
    this.PurchaseRequestLineItemSvc.List().subscribe(purchaseRequestLineItems => {
      console.log(purchaseRequestLineItems);
      this.purchaseRequestLineItems = purchaseRequestLineItems;
    });
    
  }

}
