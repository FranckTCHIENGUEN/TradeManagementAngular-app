import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StatistiquePageRoutingModule} from './statistique-page-routing.module';
import {StatistiquePageComponent} from './statistique-page.component';
import {CommandPageModule} from "../command-page/command-page.module";


@NgModule({
  declarations: [
    StatistiquePageComponent
  ],
    imports: [
        CommonModule,
        StatistiquePageRoutingModule,
        CommandPageModule
    ]
})
export class StatistiquePageModule { }
