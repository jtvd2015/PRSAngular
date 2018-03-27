import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";

import { VendorService } from "../../services/vendor.service";
import { Vendors } from "../../models/vendor";



@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  pagetitle: string = "Product Change";
  product: Product;
  vendors: Vendors[];

  constructor(
    private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  //This is used in the <select [compareWith]='compareFn' to choose the FK in the drop-down list.
  // This one uses Vendor instances. For FKs with just the ID, it would be:
  // compareFn(v1: number, v2: number) { return v1 == v2; }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  change(): void {
    this.ProductSvc.Change(this.product)
      .subscribe(res => {
        console.log(res);
          this.router.navigateByUrl("/products/list");
    });
  }

  getProductById(Id) {
    this.ProductSvc.Get(Id)
      .subscribe(product => {
        this.product = product;
          console.log("Product:", product);
    });
  }

  ngOnInit() {
    this.VendorSvc.List()
      .subscribe(vendors => {
        this.vendors = vendors;
          console.log("Vendors", vendors);
    });

    this.route.params.subscribe(params => {
      let Id = params["Id"];
      this.getProductById(Id);
    });
  }
}
