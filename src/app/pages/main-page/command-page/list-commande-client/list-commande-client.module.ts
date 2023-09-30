import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListCommandeClientRoutingModule} from './list-commande-client-routing.module';
import {ListCommandeClientComponent} from './list-commande-client.component';
import {ListeVentePageModule} from "../../vente-page/liste-vente-page/liste-vente-page.module";
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ListCommandeClientComponent,
  ],
  imports: [
    CommonModule,
    ListCommandeClientRoutingModule,
    ListeVentePageModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports:[
  ]
})
export class ListCommandeClientModule { }
