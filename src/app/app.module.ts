import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';
import { VendorService } from './services/vendor.service';
import { ProductService } from './services/product.service';
import { PurchaseRequestService } from './services/purchaseRequest.service';
import { PurchaseRequestLineItemService } from './services/purchaseRequestLineItem.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';

import { MenuComponent } from './support/menu/menu.component';
import { MenuItemComponent } from './support/menu/menu-item.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { PurchaseRequestCreateComponent } from './purchaseRequest/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestDetailComponent } from './purchaseRequest/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestEditComponent } from './purchaseRequest/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestListComponent } from './purchaseRequest/purchase-request-list/purchase-request-list.component';

// tslint:disable-next-line:max-line-length
import { PurchaseRequestLineItemCreateComponent } from './purchaseRequestLineItem/purchase-request-lineitem-create/purchase-requestline-create.component';
// tslint:disable-next-line:max-line-length
import { PurchaseRequestLineItemDetailComponent } from './purchaseRequestLineItem/purchase-request-lineitem-detail/purchase-requestline-detail.component';
// tslint:disable-next-line:max-line-length
import { PurchaseRequestLineItemEditComponent } from './purchaseRequestLineItem/purchase-request-lineitem-edit/purchase-requestline-edit.component';
// tslint:disable-next-line:max-line-length
import { PurchaseRequestLineItemListComponent } from './purchaseRequestLineItem/purchase-request-lineitem-list/purchase-requestline-list.component';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { SystemService } from './services/system.service';
import { PurchaseRequestLinesComponent } from './purchaseRequest/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestReviewItemComponent } from './purchaseRequest/purchase-request-review-item/purchase-request-review-item.component';
import { PurchaseRequestReviewComponent } from './purchaseRequest/purchase-request-review/purchase-request-review.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent,
    AboutComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    PurchaseRequestListComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestReviewComponent,
    PurchaseRequestReviewItemComponent,
    UserLoginComponent,
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestLineItemDetailComponent,
    PurchaseRequestLineItemEditComponent,
    PurchaseRequestLineItemListComponent,
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestReviewItemComponent,
    PurchaseRequestReviewComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaseRequestService,
    PurchaseRequestLineItemService,
    SystemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
