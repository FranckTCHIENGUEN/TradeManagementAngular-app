import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatFinancierPageRoutingModule } from './etat-financier-page-routing.module';
import { EtatFinancierPageComponent } from './etat-financier-page.component';
import {AchatPageModule} from "../achat-page/achat-page.module";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    EtatFinancierPageComponent
  ],
  imports: [
    CommonModule,
    EtatFinancierPageRoutingModule,
    AchatPageModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  ]
})
export class EtatFinancierPageModule { }
