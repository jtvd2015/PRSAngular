import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineService } from '../../services/purchaseRequestLine.service';
import { PurchaseRequestLine } from '../../models/purchaseRequestLine';
import { PurchaseRequestLineItemService } from '../../services/purchaseRequestLineItem.service';
import { PurchaseRequestLineItem } from '../../models/purchaseRequestLineItem';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-requestline-detail',
  templateUrl: './purchase-requestline-detail.component.html',
  styleUrls: ['./purchase-requestline-detail.component.css']
})
export class PurchaseRequestLineDetailComponent implements OnInit {
  pagetitle: string = 'Purchase Request Line Detail';
  purchaseRequestLine: PurchaseRequestLine;

  constructor(
    private PurchaseRequestLineSvc: PurchaseRequestLineService,
    private router: Router,
    private sys: SystemService,
    private route: ActivatedRoute
  ) {}

  remove(): void {
    this.PurchaseRequestLineSvc.Remove(this.purchaseRequestLine).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/purchaseRequestLines/list');
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
    this.route.params.subscribe(params => {
      let Id = params['Id'];
      this.getPurchaseRequestLineById(Id);
    });
  }
}
