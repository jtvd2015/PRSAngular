import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';


import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { PurchaseRequestListComponent } from './purchaseRequest/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchaseRequest/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestCreateComponent } from './purchaseRequest/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestEditComponent } from './purchaseRequest/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestLinesComponent } from './purchaseRequest/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestReviewComponent } from './purchaseRequest/purchase-request-review/purchase-request-review.component';
import { PurchaseRequestReviewItemComponent } from './purchaseRequest/purchase-request-review-item/purchase-request-review-item.component';

// tslint:disable-next-line:max-line-length
import { PurchaseRequestLineItemListComponent } from './purchaseRequestLineItem/purchase-request-lineitem-list/purchase-requestline-list.component';
// tslint:disable-next-line:max-line-length
import { PurchaseRequestLineItemDetailComponent } from './purchaseRequestLineItem/purchase-request-lineitem-detail/purchase-requestline-detail.component';
// tslint:disable-next-line:max-line-length
import { PurchaseRequestLineItemCreateComponent } from './purchaseRequestLineItem/purchase-request-lineitem-create/purchase-requestline-create.component';
// tslint:disable-next-line:max-line-length
import { PurchaseRequestLineItemEditComponent } from './purchaseRequestLineItem/purchase-request-lineitem-edit/purchase-requestline-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'purchaseRequests/', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'purchaseRequests/review/:Id',
    component: PurchaseRequestReviewItemComponent
  },
  {
    path: 'purchaseRequests/review',
    component: PurchaseRequestReviewComponent
  },

  {
    path: 'purchaseRequestLineItems/create/:Id',
    component: PurchaseRequestLineItemCreateComponent
  },
  {
    path: 'purchaseRequestLineItems/detail/:prId/:Id',
    component: PurchaseRequestLineItemDetailComponent
  },
  {
    path: 'purchaseRequestLineItems/edit/:prId/:Id',
    component: PurchaseRequestLineItemEditComponent
  },
  {
    path: 'purchaseRequestLinesItems/list',
    component: PurchaseRequestLineItemListComponent
  },

  {
    path: 'purchaseRequests/create',
    component: PurchaseRequestCreateComponent
  },
  {
    path: 'purchaseRequests/detail/:Id',
    component: PurchaseRequestDetailComponent
  },
  {
    path: 'purchaseRequests/edit/:Id',
    component: PurchaseRequestEditComponent
  },
  { path: 'purchaseRequests/list', component: PurchaseRequestListComponent },
  {
    path: 'purchaseRequests/lines/:Id',
    component: PurchaseRequestLinesComponent
  },

  { path: 'products/detail/:Id', component: ProductDetailComponent },
  { path: 'products/edit/:Id', component: ProductEditComponent },
  { path: 'products/list', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },

  { path: 'vendors/create', component: VendorCreateComponent },
  { path: 'vendors/detail/:Id', component: VendorDetailComponent },
  { path: 'vendors/edit/:Id', component: VendorEditComponent },
  { path: 'vendors/list', component: VendorListComponent },

  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/detail/:Id', component: UserDetailComponent },
  { path: 'users/edit/:Id', component: UserEditComponent },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/login', component: UserLoginComponent },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}