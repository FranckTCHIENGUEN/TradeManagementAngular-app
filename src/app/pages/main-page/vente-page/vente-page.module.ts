import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VentePageRoutingModule} from './vente-page-routing.module';
import {VentePageComponent} from './vente-page.component';
import {CommandPageModule} from "../command-page/command-page.module";


@NgModule({
  declarations: [
    VentePageComponent
  ],
    imports: [
        CommonModule,
        VentePageRoutingModule,
      CommandPageModule
    ]
})
export class VentePageModule { }
