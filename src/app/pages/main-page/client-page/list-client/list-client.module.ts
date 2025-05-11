import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClientRoutingModule } from './list-client-routing.module';
import { ListClientComponent } from './list-client.component';
import {FournisseurPageModule} from "../../fournisseur-page/fournisseur-page.module";


@NgModule({
  declarations: [
    ListClientComponent
  ],
    imports: [
        CommonModule,
        ListClientRoutingModule,
        FournisseurPageModule
    ]
})
export class ListClientModule { }
