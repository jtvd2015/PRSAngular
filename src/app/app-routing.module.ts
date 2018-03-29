import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';

import { UserListComponent } from "./user/user-list/user-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";

import { VendorListComponent } from "./vendor/vendor-list/vendor-list.component";
import { VendorDetailComponent } from "./vendor/vendor-detail/vendor-detail.component";
import { VendorCreateComponent } from "./vendor/vendor-create/vendor-create.component";
import { VendorEditComponent } from "./vendor/vendor-edit/vendor-edit.component";

import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { ProductCreateComponent } from "./product/product-create/product-create.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";

import { PurchaseRequestListComponent } from "./purchaseRequest/purchase-request-list/purchase-request-list.component";
import { PurchaseRequestDetailComponent } from "./purchaseRequest/purchase-request-detail/purchase-request-detail.component";
import { PurchaseRequestCreateComponent } from "./purchaseRequest/purchase-request-create/purchase-request-create.component";
import { PurchaseRequestEditComponent } from "./purchaseRequest/purchase-request-edit/purchase-request-edit.component";

import { PurchaseRequestLineItemListComponent } from "./prLineItems/purchase-request-lineitem-list/purchase-request-lineitem-list.component";
import { PurchaseRequestLineItemDetailComponent } from "./prLineItems/purchase-request-lineitem-detail/purchase-request-lineitem-detail.component";
import { PurchaseRequestLineItemCreateComponent } from "./prLineItems/purchase-request-lineitem-create/purchase-request-lineitem-create.component";
import { PurchaseRequestLineItemEditComponent } from "./prLineItems/purchase-request-lineitem-edit/purchase-request-lineitem-edit.component";


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "purchaseRequestLineItems/create", component: PurchaseRequestLineItemCreateComponent },
  { path: "purchaseRequestLineItems/detail/:id", component: PurchaseRequestLineItemDetailComponent },
  { path: "purchaseRequestLineItems/edit/:id", component: PurchaseRequestLineItemEditComponent },
  { path: "purchaseRequestLineItems/list", component: PurchaseRequestLineItemListComponent },

  { path: "purchaseRequests/create", component: PurchaseRequestCreateComponent },
  { path: "purchaseRequests/detail/:id", component: PurchaseRequestDetailComponent },
  { path: "purchaseRequests/edit/:id", component: PurchaseRequestEditComponent },
  { path: "purchaseRequests/list", component: PurchaseRequestListComponent },

  { path: "products/create", component: ProductCreateComponent },
  { path: "products/detail/:Id", component: ProductDetailComponent },
  { path: "products/edit/:Id", component: ProductEditComponent },
  { path: "products/list", component: ProductListComponent },

  { path: "vendors/create", component: VendorCreateComponent },
  { path: "vendors/detail/:Id", component: VendorDetailComponent },
  { path: "vendors/edit/:Id", component: VendorEditComponent },
  { path: "vendors/list", component: VendorListComponent },

  { path: "users/create", component: UserCreateComponent },
  { path: "users/detail/:Id", component: UserDetailComponent },
  { path: "users/edit/:Id", component: UserEditComponent },
  { path: "users/list", component: UserListComponent },

  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}