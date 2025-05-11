import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupeClientComponent } from './groupe-client.component';

const routes: Routes = [{ path: '', component: GroupeClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupeClientRoutingModule { }
