import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommandeClientComponent } from './list-commande-client.component';

const routes: Routes = [{ path: '', component: ListCommandeClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCommandeClientRoutingModule { }
