import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientPageRoutingModule} from './client-page-routing.module';
import {ClientPageComponent} from './client-page.component';
import {FournisseurPageModule} from "../fournisseur-page/fournisseur-page.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {CommandPageModule} from "../command-page/command-page.module";


@NgModule({
  declarations: [
    ClientPageComponent,
  ],
    imports: [
        CommonModule,
        ClientPageRoutingModule,
        FournisseurPageModule,
        MatSlideToggleModule,
        FormsModule,
      CommandPageModule
    ]
})
export class ClientPageModule { }
