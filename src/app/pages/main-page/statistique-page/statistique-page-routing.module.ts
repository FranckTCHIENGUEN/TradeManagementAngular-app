import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatistiquePageComponent } from './statistique-page.component';

const routes: Routes = [{ path: '', component: StatistiquePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiquePageRoutingModule { }
