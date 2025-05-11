import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BilanJournalierPageRoutingModule} from './bilan-journalier-page-routing.module';
import {BilanJournalierPageComponent} from './bilan-journalier-page.component';
import {ViewBilanComptaComponent} from "../../../../components/view-bilan-compta/view-bilan-compta.component";
import {ListeVentePageModule} from "../../vente-page/liste-vente-page/liste-vente-page.module";
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {ComptaListViewComponent} from "../../../../components/compta-list-view/compta-list-view.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
    declarations: [
        BilanJournalierPageComponent,
        ViewBilanComptaComponent,
      ComptaListViewComponent,
    ],
    exports: [
        ViewBilanComptaComponent,
      ComptaListViewComponent,
    ],
  imports: [
    CommonModule,
    BilanJournalierPageRoutingModule,
    ListeVentePageModule,
    FormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    // ComptaPageModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class BilanJournalierPageModule { }
