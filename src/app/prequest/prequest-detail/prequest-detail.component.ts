import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { PurchaseRequestService } from "../../services/prequest.service";
import { PurchaseRequest } from "../../models/prequest";

import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: "app-prequest-detail",
  templateUrl: "./prequest-detail.component.html",
  styleUrls: ["./prequest-detail.component.css"]
})
export class PrequestDetailComponent implements OnInit {

  pagetitle: string = "Purchase Request Detail";
  purchaseRequest: PurchaseRequest;

  constructor(
    private PurchaseRequestSvc: PurchaseRequest,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getPurchaseRequestById(Id) {
    this.PurchaseRequestSvc.Get(Id)
      .subscribe(prequest => {
        this.purchaseRequest = prequest;
          console.log("PurchaseRequest:", prequest);
    });
  }

  remove(): void {
    this.PurchaseRequestSvc.Remove(this.purchaseRequest)
    .subscribe(res => {
      console.log(res);
    });
    this.router.navigateByUrl("/prequest/list");
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      let Id = params["Id"];
      this.getPurchaseRequestById(Id);
    });
  }
}
