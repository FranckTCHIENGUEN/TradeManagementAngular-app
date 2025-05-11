import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComptaPageRoutingModule} from './compta-page-routing.module';
import {ComptaPageComponent} from './compta-page.component';
import {CommandPageModule} from "../command-page/command-page.module";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    ComptaPageComponent,
  ],
  imports: [
    CommonModule,
    ComptaPageRoutingModule,
    CommandPageModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
})
export class ComptaPageModule { }
