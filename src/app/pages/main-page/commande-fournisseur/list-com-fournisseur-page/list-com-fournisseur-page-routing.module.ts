import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComFournisseurPageComponent} from './list-com-fournisseur-page.component';

const routes: Routes = [{ path: '', component: ListComFournisseurPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListComFournisseurPageRoutingModule { }
