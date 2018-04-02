import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaseRequestLineService } from '../../services/purchaseRequestLine.service';
import { PurchaseRequestLine } from '../../models/purchaseRequestLine';
import { PurchaseRequestLineItemService } from '../../services/purchaseRequestLineItem.service';
import { PurchaseRequestLineItem } from '../../models/purchaseRequestLineItem';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-requestline-create',
  templateUrl: './purchase-requestline-create.component.html',
  styleUrls: ['./purchase-requestline-create.component.css']
})
export class PurchaseRequestLineCreateComponent implements OnInit {
  pagetitle: string = 'Purchase Request Line Create';
  purchaseRequestId: number;
  purchaseRequestLineItem: PurchaseRequestLineItem = new PurchaseRequestLineItem(
    0,
    0,
    '',
    true,
    0
  );
  products: Product[];

  constructor(
    private PurchaseRequestLineSvc: PurchaseRequestLineService,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private ProductSvc: ProductService,
    private Sys: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    this.purchaseRequestLineItem.PurchaseRequestsId = this.purchaseRequestId;
    console.log('this.purchaseRequestLineItem', this.purchaseRequestLineItem);
    this.PurchaseRequestLineItemSvc.Create(
      this.purchaseRequestLineItem
    ).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaseRequestLineItems/list');
    });
  }

  getProductsList(): void {
    this.ProductSvc.List().subscribe(products => {
      this.products = products;
      console.log('Products', this.products);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.purchaseRequestId = +param['Id'];
      this.getProductsList();
    });
  }
}
