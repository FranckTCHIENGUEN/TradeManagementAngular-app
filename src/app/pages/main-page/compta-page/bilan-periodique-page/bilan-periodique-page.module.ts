import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilanPeriodiquePageRoutingModule } from './bilan-periodique-page-routing.module';
import { BilanPeriodiquePageComponent } from './bilan-periodique-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {BilanJournalierPageModule} from "../bilan-journalier-page/bilan-journalier-page.module";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    BilanPeriodiquePageComponent
  ],
  imports: [
    CommonModule,
    BilanPeriodiquePageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    BilanJournalierPageModule,
    MatDatepickerModule
  ]
})
export class BilanPeriodiquePageModule { }
