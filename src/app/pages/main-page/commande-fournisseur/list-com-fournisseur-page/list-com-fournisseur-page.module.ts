import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListComFournisseurPageRoutingModule} from './list-com-fournisseur-page-routing.module';
import {ListComFournisseurPageComponent} from './list-com-fournisseur-page.component';
import {ListeVentePageModule} from "../../vente-page/liste-vente-page/liste-vente-page.module";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ListComFournisseurPageComponent
  ],
  imports: [
    CommonModule,
    ListComFournisseurPageRoutingModule,
    ListeVentePageModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
  ]
})
export class ListComFournisseurPageModule { }
