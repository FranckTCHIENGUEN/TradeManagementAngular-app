import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SaveVentePageComponent} from './save-vente-page.component';

const routes: Routes = [{ path: '', component: SaveVentePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveVentePageRoutingModule { }
