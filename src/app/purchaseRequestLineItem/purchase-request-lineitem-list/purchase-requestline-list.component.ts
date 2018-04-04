import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-requestline-list',
  templateUrl: './purchase-requestline-list.component.html',
  styleUrls: ['./purchase-requestline-list.component.css']
})
export class PurchaseRequestLineItemListComponent implements OnInit {
  constructor(private sys: SystemService) {}

  ngOnInit() {}
}
