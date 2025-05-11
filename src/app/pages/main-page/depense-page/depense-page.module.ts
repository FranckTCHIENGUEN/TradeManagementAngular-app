import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DepensePageRoutingModule} from './depense-page-routing.module';
import {DepensePageComponent} from './depense-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ListeVentePageModule} from "../vente-page/liste-vente-page/liste-vente-page.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";


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
    ListeVentePageModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DepensePageModule { }
