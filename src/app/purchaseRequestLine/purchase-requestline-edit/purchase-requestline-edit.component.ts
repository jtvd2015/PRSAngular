import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineService } from '../../services/purchaseRequestLine.service';
import { PurchaseRequestLine } from '../../models/purchaseRequestLine';
import { PurchaseRequestLineItemService } from '../../services/purchaseRequestLineItem.service';
import { PurchaseRequestLineItem } from '../../models/purchaseRequestLineItem';
import { PurchaseRequestService } from '../../services/purchaseRequest.service';
import { PurchaseRequest } from '../../models/purchaseRequest';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { SystemService } from '../../services/system.service';

@Component({
  selector: "app-purchase-requestline-edit",
  templateUrl: "./purchase-requestline-edit.component.html",
  styleUrls: ["./purchase-requestline-edit.component.css"]
})
export class PurchaseRequestLineEditComponent implements OnInit {
  pagetitle: string = "Purchase Request Line Edit";
  purchaseRequestLine: PurchaseRequestLine;
  products: Product[];
  purchaseRequests: PurchaseRequest[];
  users: User[];

  constructor(
    private PurchaseRequestLineSvc: PurchaseRequestLineService,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private PurchaseRequestSvc: PurchaseRequestService,
    private ProductSvc: ProductService,
    private UserSvc: UserService,
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  change(): void {
    this.PurchaseRequestLineSvc.Change(this.purchaseRequestLine).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("/purchaseRequestLines/list");
      }
    );
  }

  getPurchaseRequestLineById(Id) {
    this.PurchaseRequestLineSvc.Get(Id).subscribe(purchaseRequestLine => {
      this.purchaseRequestLine = purchaseRequestLine;
      console.log('PurchaseRequestLine:', purchaseRequestLine);
    });
  }

  ngOnInit() {
    this.ProductSvc.List().subscribe(products => {
      this.products = products;
      console.log('Products', this.products);
    });

    this.PurchaseRequestSvc.List().subscribe(purchaseRequests => {
      this.purchaseRequests = purchaseRequests;
      console.log('PurchaseRequests', purchaseRequests);
    });

    this.UserSvc.List().subscribe(users => {
      this.users = users;
      console.log('Users', users);
    });

    this.route.params.subscribe(params => {
      let Id = params['Id'];
      this.getPurchaseRequestLineById(Id);
    });
  }
}
