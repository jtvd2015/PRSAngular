import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VendorService } from '../../services/vendor.service';
import { Vendors } from '../../models/vendor';

@Component({
  selector: "app-vendor-detail",
  templateUrl: "./vendor-detail.component.html",
  styleUrls: ["./vendor-detail.component.css"]
})
export class VendorDetailComponent implements OnInit {

  pagetitle: string = "Vendor Create";
  vendor: Vendors;

  constructor(
    private VendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getVendorById(Id) {
    this.VendorSvc.Get(Id).subscribe(vendor => {
      this.vendor = vendor;
      console.log("Vendor:", vendor);
    });
  }
  remove(): void {
    this.VendorSvc.Remove(this.vendor).subscribe(res => {
      console.log(res);
    });
    this.router.navigateByUrl("/vendors/list");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let Id = params["Id"];
      this.getVendorById(Id);
    });
  }
}
