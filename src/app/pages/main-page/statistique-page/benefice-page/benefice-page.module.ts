import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficePageRoutingModule } from './benefice-page-routing.module';
import { BeneficePageComponent } from './benefice-page.component';
import {AchatPageModule} from "../achat-page/achat-page.module";


@NgModule({
  declarations: [
    BeneficePageComponent
  ],
    imports: [
        CommonModule,
        BeneficePageRoutingModule,
        AchatPageModule
    ]
})
export class BeneficePageModule { }
