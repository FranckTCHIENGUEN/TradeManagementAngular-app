import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListeVentePageComponent} from './liste-vente-page.component';

const routes: Routes = [{ path: '', component: ListeVentePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeVentePageRoutingModule { }
