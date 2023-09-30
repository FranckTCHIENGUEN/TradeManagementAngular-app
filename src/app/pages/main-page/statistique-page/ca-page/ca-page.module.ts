import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaPageRoutingModule } from './ca-page-routing.module';
import { CaPageComponent } from './ca-page.component';
import {AchatPageModule} from "../achat-page/achat-page.module";


@NgModule({
  declarations: [
    CaPageComponent
  ],
    imports: [
        CommonModule,
        CaPageRoutingModule,
        AchatPageModule
    ]
})
export class CaPageModule { }
