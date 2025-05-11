import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServiceRoutingModule} from './service-routing.module';
import {ServiceComponent} from './service.component';
import {MatButtonModule} from "@angular/material/button";
import {ProduitPageModule} from "../produit-page/produit-page.module";
import {MatIconModule} from "@angular/material/icon";
import {ListeVentePageModule} from "../vente-page/liste-vente-page/liste-vente-page.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MatButtonModule,
    MatIconModule,
    ProduitPageModule,
    ListeVentePageModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class ServiceModule { }
