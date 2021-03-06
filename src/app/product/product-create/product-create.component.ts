import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { VendorService } from "../../services/vendor.service";
import { Vendors } from "../../models/vendor";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"]
})
export class ProductCreateComponent implements OnInit {
  pagetitle: string = "Product Create";
  product: Product = new Product(0, 0, "", "", 10, "Each", true);
  vendors: Vendors[];

  constructor(
    private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private router: Router
  ) {}

  // This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a drop-down list
  // This one uses Vendor instances. For FKs with just the ID, it would be:
  // compareFn(v1: number, v2: number) { return v1 == v2; }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    this.ProductSvc.Create(this.product)
      .subscribe(res => {
        console.log(res);
          this.router.navigateByUrl("/products/list");
    });
  }

  ngOnInit() {
    this.VendorSvc.List()
      .subscribe(vendors => {
        this.vendors = vendors;
          console.log("Vendors", this.vendors);
    });
  }
}
