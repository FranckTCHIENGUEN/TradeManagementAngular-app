import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitPageRoutingModule } from './produit-page-routing.module';
import { ProduitPageComponent } from './produit-page.component';
import {ViewProductComponent} from "../../../components/view-product/view-product.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    ProduitPageComponent,
    ViewProductComponent,
  ],
  imports: [
    CommonModule,
    ProduitPageRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports :[
    ViewProductComponent,
  ]
})
export class ProduitPageModule { }
