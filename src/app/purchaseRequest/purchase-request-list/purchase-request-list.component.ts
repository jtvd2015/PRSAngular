import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService } from '../../services/purchaseRequest.service';
import { PurchaseRequest } from '../../models/purchaseRequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {
  pagetitle: string = 'Purchase Request List';
  purchaseRequests: PurchaseRequest[];

  constructor(
    private SysSvc: SystemService,
    private PurchaseRequestSvc: PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.PurchaseRequestSvc.List().subscribe(purchaseRequests => {
      console.log(purchaseRequests);
      this.purchaseRequests = purchaseRequests;
    });
  }
}
