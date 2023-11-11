import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeneficePageComponent} from './benefice-page.component';

const routes: Routes = [{ path: '', component: BeneficePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficePageRoutingModule { }
