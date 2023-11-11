import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AchatPageComponent} from './achat-page.component';

const routes: Routes = [{ path: '', component: AchatPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatPageRoutingModule { }
