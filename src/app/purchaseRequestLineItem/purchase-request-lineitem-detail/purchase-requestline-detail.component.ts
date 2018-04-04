import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineItem } from '../../models/purchaseRequestLineItem';
import { PurchaseRequestLineItemService } from '../../services/purchaseRequestLineItem.service';
import { PurchaseRequestService } from '../../services/purchaseRequest.service';
import { PurchaseRequest } from '../../models/purchaseRequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-requestline-detail',
  templateUrl: './purchase-requestline-detail.component.html',
  styleUrls: ['./purchase-requestline-detail.component.css']
})
export class PurchaseRequestLineItemDetailComponent implements OnInit {
  pagetitle: string = 'Purchase Request Line Item Detail';
  purchaseRequestId: number;
  purchaseRequestLineItem: PurchaseRequestLineItem;
  purchaseRequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(
    private PurchaseRequestLineItemsSvc: PurchaseRequestLineItemService,
    private router: Router,
    private sys: SystemService,
    private route: ActivatedRoute,
    private PurchaseRequestSvc: PurchaseRequestService
  ) {}

  remove(): void {
    console.log(this.purchaseRequestLineItem);
    this.PurchaseRequestLineItemsSvc.Remove(
      this.purchaseRequestLineItem
    ).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl(
        '/purchaseRequests/lines/' + this.purchaseRequestId
      );
    });
  }

  verify(): void {
    this.isHidden = false;
  }

  review(): void {
    if (this.purchaseRequest.Total <= 50) {
      this.purchaseRequest.Status = 'APPROVED';
    } else {
      this.purchaseRequest.Status = 'REVIEW';
    }

    this.PurchaseRequestSvc.Change(this.purchaseRequest).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaseRequests/list');
    });
  }

  getPurchaseRequestLineItemById(Id) {
    this.PurchaseRequestLineItemsSvc.Get(Id).subscribe(
      purchaseRequestLineItem => {
        this.purchaseRequestLineItem = purchaseRequestLineItem;
        console.log('PurchaseRequestLineItem:', purchaseRequestLineItem);
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let Id = params['Id'];
      this.purchaseRequestId = params['prId'];
      this.getPurchaseRequestLineItemById(Id);
    });
  }
}
