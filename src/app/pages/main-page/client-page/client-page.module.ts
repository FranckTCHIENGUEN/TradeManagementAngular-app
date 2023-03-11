import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPageRoutingModule } from './client-page-routing.module';
import { ClientPageComponent } from './client-page.component';
import {FournisseurPageModule} from "../fournisseur-page/fournisseur-page.module";


@NgModule({
  declarations: [
    ClientPageComponent
  ],
    imports: [
        CommonModule,
        ClientPageRoutingModule,
        FournisseurPageModule
    ]
})
export class ClientPageModule { }
