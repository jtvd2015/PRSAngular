import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineItemService } from '../../services/purchaseRequestLineItem.service';
import { PurchaseRequestLineItem } from '../../models/purchaseRequestLineItem';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-request-lineitem-detail',
  templateUrl: './purchase-request-lineitem-detail.component.html',
  styleUrls: ['./purchase-request-lineitem-detail.component.css']
})
export class PurchaseRequestLineItemDetailComponent implements OnInit {
  pagetitle: string = 'Purchase Request Line Item Detail';
  purchaseRequestLineItem: PurchaseRequestLineItem;

  constructor(
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private router: Router,
    private sys: SystemService,
    private route: ActivatedRoute
  ) {}

  remove(): void {
    this.PurchaseRequestLineItemSvc.Remove(
      this.purchaseRequestLineItem
    ).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaseRequestLineItems/list');
    });
  }

  getPurchaseRequestLineItemsById(Id) {
    this.PurchaseRequestLineItemSvc.Get(Id).subscribe(
      purchaseRequestLineItem => {
        this.purchaseRequestLineItem = purchaseRequestLineItem;
        console.log('PurchaseRequestLineItem:', purchaseRequestLineItem);
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let Id = params['Id'];
      this.getPurchaseRequestLineItemsById(Id);
    });
  }
}
