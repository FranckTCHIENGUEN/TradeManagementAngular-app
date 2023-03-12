import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeVentePageRoutingModule } from './liste-vente-page-routing.module';
import { ListeVentePageComponent } from './liste-vente-page.component';
import {ListCommandeClientModule} from "../../command-page/list-commande-client/list-commande-client.module";


@NgModule({
  declarations: [
    ListeVentePageComponent
  ],
    imports: [
        CommonModule,
        ListeVentePageRoutingModule,
        ListCommandeClientModule
    ]
})
export class ListeVentePageModule { }
