import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommandPageRoutingModule} from './command-page-routing.module';
import {CommandPageComponent} from './command-page.component';
import {SecondaryMenuComponent} from "../../../components/secondary-menu/secondary-menu.component";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        CommandPageComponent,
        SecondaryMenuComponent
    ],
    exports: [
        SecondaryMenuComponent
    ],
    imports: [
        CommonModule,
        CommandPageRoutingModule,
        MatIconModule,
        MatDividerModule,
        MatProgressBarModule,
        MatButtonModule
    ]
})
export class CommandPageModule { }
