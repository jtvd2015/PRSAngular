import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../../services/purchaseRequest.service';
import { PurchaseRequest } from '../../models/purchaseRequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  pagetitle: string = 'Purchase Request Review';
  purchaseRequests: PurchaseRequest[];

  constructor(
    private sys: SystemService,
    private PurchaseRequestSvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.PurchaseRequestSvc.ReviewList()
      .subscribe(purchaseRequests => {
        console.log(purchaseRequests);
        this.purchaseRequests = purchaseRequests;
      });
  }

}
