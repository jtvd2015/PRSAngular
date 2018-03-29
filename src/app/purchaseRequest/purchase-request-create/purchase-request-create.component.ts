import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PurchaseRequestService } from "../../services/purchaseRequest.service";
import { PurchaseRequest } from "../../models/purchaseRequest";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { SystemService } from "../../services/system.service";

@Component({
  selector: "app-purchase-request-create",
  templateUrl: "./purchase-request-create.component.html",
  styleUrls: ["./purchase-request-create.component.css"]
})
export class PurchaseRequestCreateComponent implements OnInit {
  pagetitle: string = "PurchaseRequest Create";
  purchaseRequest: PurchaseRequest = new PurchaseRequest(0, 0, "", "Not Needed", "USPS", "NEW", 0, true, "Not Needed");
  users: User[];

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private UserSvc: UserService,
    private Sys: SystemService,
    private router: Router
  ) {}

  // This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a drop-down list
  // This one uses User instances. For FKs with just the ID, it would be:
  // compareFn(v1: number, v2: number) { return v1 == v2; }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    console.log("this.purchaseRequest", this.purchaseRequest);
    this.PurchaseRequestSvc.Create(this.purchaseRequest).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/purchaseRequests/list");
    });
  }

  ngOnInit() {
    this.UserSvc.List().subscribe(users => {
      this.users = users;
      console.log("Users", this.users);
    });
  }
}
