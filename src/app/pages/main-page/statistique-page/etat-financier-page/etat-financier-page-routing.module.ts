import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EtatFinancierPageComponent} from './etat-financier-page.component';

const routes: Routes = [{ path: '', component: EtatFinancierPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatFinancierPageRoutingModule { }
