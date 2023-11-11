import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VentePageRoutingModule} from './vente-page-routing.module';
import {VentePageComponent} from './vente-page.component';
import {AchatPageModule} from "../achat-page/achat-page.module";


@NgModule({
  declarations: [
    VentePageComponent
  ],
    imports: [
        CommonModule,
        VentePageRoutingModule,
        AchatPageModule
    ]
})
export class VentePageModule { }
