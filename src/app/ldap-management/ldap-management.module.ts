import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppMaterialModule } from "src/app/app-material.module";
import { AlertComponent } from "../share/alert/alert.component";
import { LdapManagementRoutingModule } from "./ldap-management-routing.module";
import { LdapListComponent } from "./ldap-list/ldap-list.component";
import { MatIconModule } from "@angular/material/icon";





@NgModule({
  declarations: [
    LdapListComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatIconModule,
    LdapManagementRoutingModule,
  ]
})
export class LdapManagementModule { }
