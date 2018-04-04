import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaseRequest.service';
import { PurchaseRequest } from '../../models/purchaseRequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: "app-purchase-request-review-item",
  templateUrl: "./purchase-request-review-item.component.html",
  styleUrls: ["./purchase-request-review-item.component.css"]
})
export class PurchaseRequestReviewItemComponent implements OnInit {
  pagetitle: string = "Purchase Request Review";
  purchaseRequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private sys: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  approve(): void {
    this.change("APPROVED");
  }
  reject(): void {
    this.change("REJECTED");
  }
  private change(status: string): void {
    this.purchaseRequest.Status = status;
    this.PurchaseRequestSvc.Change(this.purchaseRequest).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/purchaseRequests/review");
    });
  }
  getPurchaseRequestById(Id) {
    this.PurchaseRequestSvc.Get(Id).subscribe(purchaseRequest => {
      this.purchaseRequest = purchaseRequest;
      console.log("PurchaseRequest:", purchaseRequest);
    });
  }

  approve(): void {
    this.change("APPROVED");
  }
  verify(): void {
    this.verifyReject = true;
  }
  reject(): void {
    this.change("REJECTED");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let Id = params["Id"];
      this.getPurchaseRequestById(Id);
    });
  }
}
