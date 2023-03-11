import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitPageComponent } from './produit-page.component';

const routes: Routes = [{ path: '', component: ProduitPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitPageRoutingModule { }
