import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';
import { VendorService } from './services/vendor.service';
import { ProductService } from './services/product.service';
import { PurchaseRequestService } from "./services/prequest.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from "./support/about/about.component";

import { MenuComponent } from './support/menu/menu.component';
import { MenuItemComponent } from './support/menu/menu-item.component';

import { UserListComponent } from "./user/user-list/user-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";

import { VendorListComponent } from "./vendor/vendor-list/vendor-list.component";
import { VendorDetailComponent } from "./vendor/vendor-detail/vendor-detail.component";
import { VendorCreateComponent } from "./vendor/vendor-create/vendor-create.component";
import { VendorEditComponent } from "./vendor/vendor-edit/vendor-edit.component";

import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { PrequestListComponent } from './prequest/prequest-list/prequest-list.component';
import { PrequestDetailComponent } from './prequest/prequest-detail/prequest-detail.component';
import { PrequestEditComponent } from './prequest/prequest-edit/prequest-edit.component';
import { PrequestCreateComponent } from "./prequest/prequest-create/prequest-create.component";

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
    PrequestListComponent,
    PrequestDetailComponent,
    PrequestEditComponent,
    PrequestCreateComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaseRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
