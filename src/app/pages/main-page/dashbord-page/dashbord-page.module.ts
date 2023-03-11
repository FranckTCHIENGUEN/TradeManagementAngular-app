import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordPageRoutingModule } from './dashbord-page-routing.module';
import { DashbordPageComponent } from './dashbord-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    DashbordPageComponent
  ],
  imports: [
    CommonModule,
    DashbordPageRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ]
})
export class DashbordPageModule { }
