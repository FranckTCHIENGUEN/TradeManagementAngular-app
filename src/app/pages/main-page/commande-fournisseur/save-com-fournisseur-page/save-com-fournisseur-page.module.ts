import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SaveComFournisseurPageRoutingModule} from './save-com-fournisseur-page-routing.module';
import {SaveComFournisseurPageComponent} from './save-com-fournisseur-page.component';
import {SaveCommandeClientModule} from "../../command-page/save-commande-client/save-commande-client.module";


@NgModule({
  declarations: [
    SaveComFournisseurPageComponent
  ],
    imports: [
        CommonModule,
        SaveComFournisseurPageRoutingModule,
        SaveCommandeClientModule
    ]
})
export class SaveComFournisseurPageModule { }
