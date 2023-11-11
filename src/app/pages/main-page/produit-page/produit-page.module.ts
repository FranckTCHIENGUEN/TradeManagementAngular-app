import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProduitPageRoutingModule} from './produit-page-routing.module';
import {ProduitPageComponent} from './produit-page.component';
import {ViewProductComponent} from "../../../components/view-product/view-product.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    ProduitPageComponent,
    ViewProductComponent,
  ],
    imports: [
        CommonModule,
        ProduitPageRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule
    ],
  exports :[
    ViewProductComponent,
  ]
})
export class ProduitPageModule { }
