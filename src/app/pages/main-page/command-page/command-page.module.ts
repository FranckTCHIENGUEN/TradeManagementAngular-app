import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommandPageRoutingModule} from './command-page-routing.module';
import {CommandPageComponent} from './command-page.component';
import {SecondaryMenuComponent} from "../../../components/secondary-menu/secondary-menu.component";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {
  ListViewDetailDialogComponent
} from "../../../components/list-view-detail-dialog/list-view-detail-dialog.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
    declarations: [
        CommandPageComponent,
        SecondaryMenuComponent,
      ListViewDetailDialogComponent,
    ],
    exports: [
        SecondaryMenuComponent,
      ListViewDetailDialogComponent,
    ],
  imports: [
    CommonModule,
    CommandPageRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class CommandPageModule { }
