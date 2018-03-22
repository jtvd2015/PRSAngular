import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from "./support/about/about.component";

import { MenuComponent } from './support/menu/menu.component';
import { MenuItemComponent } from './support/menu/menu-item.component';

import { UserListComponent } from "./user/user-list/user-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";

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
    AboutComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
