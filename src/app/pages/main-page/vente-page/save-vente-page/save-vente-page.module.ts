import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SaveVentePageRoutingModule} from './save-vente-page-routing.module';
import {SaveVentePageComponent} from './save-vente-page.component';
import {SaveCommandeClientModule} from "../../command-page/save-commande-client/save-commande-client.module";


@NgModule({
  declarations: [
    SaveVentePageComponent
  ],
    imports: [
        CommonModule,
        SaveVentePageRoutingModule,
        SaveCommandeClientModule
    ]
})
export class SaveVentePageModule { }
