import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurPageRoutingModule } from './fournisseur-page-routing.module';
import { FournisseurPageComponent } from './fournisseur-page.component';
import {PersonComponent} from "../../../components/person/person.component";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FilterPersonComponent} from "../../../components/filter-person/filter-person.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        FournisseurPageComponent,
        PersonComponent,
        FilterPersonComponent
    ],
    exports: [
        PersonComponent,
        FilterPersonComponent
    ],
  imports: [
    CommonModule,
    FournisseurPageRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class FournisseurPageModule { }
