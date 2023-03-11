import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitPageRoutingModule } from './produit-page-routing.module';
import { ProduitPageComponent } from './produit-page.component';


@NgModule({
  declarations: [
    ProduitPageComponent
  ],
  imports: [
    CommonModule,
    ProduitPageRoutingModule
  ]
})
export class ProduitPageModule { }
