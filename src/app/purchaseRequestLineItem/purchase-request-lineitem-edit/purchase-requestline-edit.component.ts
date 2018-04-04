import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineItemService } from '../../services/purchaseRequestLineItem.service';
import { PurchaseRequestLineItem } from '../../models/purchaseRequestLineItem';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-requestline-edit',
  templateUrl: './purchase-requestline-edit.component.html',
  styleUrls: ['./purchase-requestline-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {
  pagetitle: string = 'Purchase Request Line Edit';
  purchaseRequestLineItem: PurchaseRequestLineItem;
  purchaseRequestId: number;
  products: Product[];


  constructor(
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private ProductSvc: ProductService,
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  change(): void {
    console.log(this.purchaseRequestLineItem);
    this.PurchaseRequestLineItemSvc.Change(this.purchaseRequestLineItem).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/purchaseRequests/lines/' + this.purchaseRequestId);
      }
    );
  }

  getPurchaseRequestLineItemById(Id) {
    this.PurchaseRequestLineItemSvc.Get(Id).subscribe(purchaseRequestLineItem => {
      this.purchaseRequestLineItem = purchaseRequestLineItem;
      console.log('PurchaseRequestLineItems:', this.purchaseRequestLineItem);
    });
  }

  ngOnInit() {
    this.ProductSvc.List().subscribe(products => {
      this.products = products;
      console.log('Products', this.products);
    });

        this.route.params.subscribe(params => {
     let Id = params['Id'];
      this.purchaseRequestId = params['prId'];
        this.getPurchaseRequestLineItemById(Id);
    });
  }
}
