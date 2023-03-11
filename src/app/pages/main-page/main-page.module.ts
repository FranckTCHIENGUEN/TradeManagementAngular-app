import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {PrimaryMenuComponent} from "../../components/primary-menu/primary-menu.component";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    MainPageComponent,
    PrimaryMenuComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [
    PrimaryMenuComponent
  ],
})
export class MainPageModule { }
