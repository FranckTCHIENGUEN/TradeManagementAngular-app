import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptaPageRoutingModule } from './compta-page-routing.module';
import { ComptaPageComponent } from './compta-page.component';
import {CommandPageModule} from "../command-page/command-page.module";


@NgModule({
  declarations: [
    ComptaPageComponent
  ],
  imports: [
    CommonModule,
    ComptaPageRoutingModule,
    CommandPageModule
  ]
})
export class ComptaPageModule { }
