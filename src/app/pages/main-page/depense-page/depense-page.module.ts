import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DepensePageRoutingModule} from './depense-page-routing.module';
import {DepensePageComponent} from './depense-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ListeVentePageModule} from "../vente-page/liste-vente-page/liste-vente-page.module";


@NgModule({
  declarations: [
    DepensePageComponent
  ],
    imports: [
        CommonModule,
        DepensePageRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        ListeVentePageModule
    ]
})
export class DepensePageModule { }
