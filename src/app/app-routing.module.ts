import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';

import { UserListComponent } from "./user/user-list/user-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
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