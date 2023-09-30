import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilanJournalierPageRoutingModule } from './bilan-journalier-page-routing.module';
import { BilanJournalierPageComponent } from './bilan-journalier-page.component';
import {AppModule} from "../../../../app.module";
import {ViewBilanComptaComponent} from "../../../../components/view-bilan-compta/view-bilan-compta.component";
import {ListeVentePageModule} from "../../vente-page/liste-vente-page/liste-vente-page.module";
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
    declarations: [
        BilanJournalierPageComponent,
        ViewBilanComptaComponent
    ],
    exports: [
        ViewBilanComptaComponent
    ],
  imports: [
    CommonModule,
    BilanJournalierPageRoutingModule,
    ListeVentePageModule,
    FormsModule,
    MatSlideToggleModule,
  ]
})
export class BilanJournalierPageModule { }
