import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeVentePageRoutingModule } from './liste-vente-page-routing.module';
import { ListeVentePageComponent } from './liste-vente-page.component';
import {ListCommandeClientModule} from "../../command-page/list-commande-client/list-commande-client.module";
import {ListViewComponent} from "../../../../components/list-view/list-view.component";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FilterComponent} from "../../../../components/filter/filter.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    ListeVentePageComponent,
    ListViewComponent,
    FilterComponent
  ],
  exports: [
    ListViewComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ListeVentePageRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule
  ]
})
export class ListeVentePageModule { }
