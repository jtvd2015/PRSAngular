import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaseRequest.service';
import { PurchaseRequest } from '../../models/purchaseRequest';
import { PurchaseRequestLineItemService } from '../../services/purchaseRequestLineItem.service';
import { PurchaseRequestLineItem } from '../../models/purchaseRequestLineItem';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {
  pagetitle: string = 'PurchaseRequest Lines';
  purchaseRequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private sys: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getPurchaseRequestById(Id) {
    this.PurchaseRequestSvc.Get(Id).subscribe(purchaseRequest => {
      this.purchaseRequest = purchaseRequest;
      console.log('PurchaseRequest:', purchaseRequest);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let Id = params['Id'];
      this.getPurchaseRequestById(Id);
    });
  }
}
