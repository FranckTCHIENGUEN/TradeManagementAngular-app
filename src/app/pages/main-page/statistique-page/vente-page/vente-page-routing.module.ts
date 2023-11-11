import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VentePageComponent} from './vente-page.component';

const routes: Routes = [{ path: '', component: VentePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentePageRoutingModule { }
