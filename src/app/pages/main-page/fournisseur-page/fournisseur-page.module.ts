import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurPageRoutingModule } from './fournisseur-page-routing.module';
import { FournisseurPageComponent } from './fournisseur-page.component';
import {PersonComponent} from "../../../components/person/person.component";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        FournisseurPageComponent,
        PersonComponent
    ],
    exports: [
        PersonComponent
    ],
  imports: [
    CommonModule,
    FournisseurPageRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class FournisseurPageModule { }
