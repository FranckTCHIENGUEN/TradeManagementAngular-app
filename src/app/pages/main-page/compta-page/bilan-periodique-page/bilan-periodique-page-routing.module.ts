import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilanPeriodiquePageComponent } from './bilan-periodique-page.component';

const routes: Routes = [{ path: '', component: BilanPeriodiquePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilanPeriodiquePageRoutingModule { }
