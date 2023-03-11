import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiquePageRoutingModule } from './statistique-page-routing.module';
import { StatistiquePageComponent } from './statistique-page.component';


@NgModule({
  declarations: [
    StatistiquePageComponent
  ],
  imports: [
    CommonModule,
    StatistiquePageRoutingModule
  ]
})
export class StatistiquePageModule { }
