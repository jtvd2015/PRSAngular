import { Component, OnInit } from '@angular/core';
import { PurchaseRequestLineItemService } from '../../services/purchaseRequestLineItem.service';
import { PurchaseRequestLineItem } from '../../models/purchaseRequestLineItem';
import { PurchaseRequestLineService } from '../../services/purchaseRequestLine.service';
import { PurchaseRequestLine } from '../../models/purchaseRequestLine';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-requestline-list',
  templateUrl: './purchase-requestline-list.component.html',
  styleUrls: ['./purchase-requestline-list.component.css']
})
export class PurchaseRequestLineListComponent implements OnInit {
  pagetitle: string = 'Purchase Request Line List';
  purchaseRequestLines: PurchaseRequestLine[];

  constructor(
    private Sys: SystemService,
    private PurchaseRequestLineSvc: PurchaseRequestLineService
  ) {}

  ngOnInit() {
    this.PurchaseRequestLineSvc.List().subscribe(
      purchaseRequestLineItems => {
        console.log(purchaseRequestLineItems);
        this.purchaseRequestLines = purchaseRequestLineItems;
      }
    );
  }
}
