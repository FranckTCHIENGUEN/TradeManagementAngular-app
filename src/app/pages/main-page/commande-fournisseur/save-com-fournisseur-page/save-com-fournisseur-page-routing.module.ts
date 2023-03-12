import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveComFournisseurPageComponent } from './save-com-fournisseur-page.component';

const routes: Routes = [{ path: '', component: SaveComFournisseurPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveComFournisseurPageRoutingModule { }
