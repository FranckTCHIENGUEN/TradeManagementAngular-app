import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FournisseurPageComponent} from './fournisseur-page.component';

const routes: Routes = [{ path: '', component: FournisseurPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurPageRoutingModule { }
