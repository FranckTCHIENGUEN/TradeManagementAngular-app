import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveCommandeClientComponent } from './save-commande-client.component';

const routes: Routes = [{ path: '', component: SaveCommandeClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveCommandeClientRoutingModule { }
