import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComFournisseurPageRoutingModule } from './list-com-fournisseur-page-routing.module';
import { ListComFournisseurPageComponent } from './list-com-fournisseur-page.component';
import {ListCommandeClientModule} from "../../command-page/list-commande-client/list-commande-client.module";


@NgModule({
  declarations: [
    ListComFournisseurPageComponent
  ],
  imports: [
    CommonModule,
    ListComFournisseurPageRoutingModule,
    ListCommandeClientModule
  ]
})
export class ListComFournisseurPageModule { }
