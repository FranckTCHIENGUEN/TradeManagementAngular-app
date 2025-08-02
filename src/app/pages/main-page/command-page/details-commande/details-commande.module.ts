import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCommandeRoutingModule } from './details-commande-routing.module';
import { DetailsCommandeComponent } from './details-commande.component';
import {AppModule} from "../../../../app.module";
import {CommandPageModule} from "../command-page.module";


@NgModule({
  declarations: [
    DetailsCommandeComponent
  ],
  imports: [
    CommonModule,
    DetailsCommandeRoutingModule,
    CommandPageModule,

  ]
})
export class DetailsCommandeModule { }
