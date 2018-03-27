import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { PurchaseRequestService } from "../../services/prequest.service";
import { PurchaseRequest } from "../../models/prequest";

@Component({
  selector: "app-prequest-create",
  templateUrl: "./prequest-create.component.html",
  styleUrls: ["./prequest-create.component.css"]
})
export class PrequestCreateComponent implements OnInit {
  pagetitle: string = "Purchase Request Create";
  prequest: PurchaseRequest = new PurchaseRequest(0, 0, "", "", "", "", 0, true, "");


  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private router: Router
  ) {}

  create(): void {
    this.PurchaseRequestSvc.Create(this.prequest)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/prequest/list");
      });
    }

  ngOnInit() {}
}
