import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  selector: 'app-purchase-request-lineitem-edit',
  templateUrl: './purchase-request-lineitem-edit.component.html',
  styleUrls: ['./purchase-request-lineitem-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {
  pagetitle: string = 'Purchase Request Line Item Edit';
  purchaseRequestLineItem: PurchaseRequestLineItem;
  products: Product[];
  purchaseRequests: PurchaseRequest[];
  users: User[];

  constructor(
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
    this.PurchaseRequestLineItemSvc.Change(
      this.purchaseRequestLineItem
    ).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaseRequestLineItems/list');
    });
  }

  getPurchaseRequestLineItemById(Id) {
    this.PurchaseRequestLineItemSvc.Get(Id).subscribe(
      purchaseRequestLineItem => {
        this.purchaseRequestLineItem = purchaseRequestLineItem;
        console.log('PurchaseRequestLineItem:', purchaseRequestLineItem);
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
      this.getPurchaseRequestLineItemById(Id);
    });
  }
}
