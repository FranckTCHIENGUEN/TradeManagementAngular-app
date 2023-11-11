import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServiceRoutingModule} from './service-routing.module';
import {ServiceComponent} from './service.component';
import {MatButtonModule} from "@angular/material/button";
import {ProduitPageModule} from "../produit-page/produit-page.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MatButtonModule,
    MatIconModule,
    ProduitPageModule
  ]
})
export class ServiceModule { }
