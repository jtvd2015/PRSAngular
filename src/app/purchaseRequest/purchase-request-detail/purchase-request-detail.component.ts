import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { PurchaseRequestService } from "../../services/purchaseRequest.service";
import { PurchaseRequest } from "../../models/purchaseRequest";
import { SystemService } from "../../services/system.service";

@Component({
  selector: "app-purchase-request-detail",
  templateUrl: "./purchase-request-detail.component.html",
  styleUrls: ["./purchase-request-detail.component.css"]
})
export class PurchaseRequestDetailComponent implements OnInit {
  pagetitle: string = "PurchaseRequest Detail";
  purchaseRequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private router: Router,
    private sys: SystemService,
    private route: ActivatedRoute
  ) {}

  review(): void {
    this.purchaseRequest.Status =
      this.purchaseRequest.Total <= 50 ? "APPROVED" : "REVIEW";
    this.PurchaseRequestSvc.Change(this.purchaseRequest).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/purchaseRequests/list");
    });
  }

  verify(): void {
    this.isHidden = false;
  }
  remove(): void {
    this.PurchaseRequestSvc.Remove(this.purchaseRequest).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/purchaseRequests/list");
    });
  }

  getPurchaseRequestById(Id) {
    this.PurchaseRequestSvc.Get(Id).subscribe(purchaseRequest => {
      this.purchaseRequest = purchaseRequest;
      console.log("PurchaseRequest:", purchaseRequest);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let Id = params["Id"];
      this.getPurchaseRequestById(Id);
    });
  }
}
