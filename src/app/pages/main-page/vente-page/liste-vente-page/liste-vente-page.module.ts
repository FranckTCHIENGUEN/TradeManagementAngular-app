import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListeVentePageRoutingModule} from './liste-vente-page-routing.module';
import {ListeVentePageComponent} from './liste-vente-page.component';
import {ListViewComponent} from "../../../../components/list-view/list-view.component";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FilterComponent} from "../../../../components/filter/filter.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocomplete, MatAutocompleteModule, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {FilterCategoriesComponent} from "../../../../components/filter-categories/filter-categories.component";


@NgModule({
  declarations: [
    ListeVentePageComponent,
    ListViewComponent,
    FilterCategoriesComponent,
    FilterComponent
  ],
  exports: [
    ListViewComponent,
    FilterCategoriesComponent,
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
    MatSlideToggleModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatOption,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatSelect,
  ]
})
export class ListeVentePageModule { }
