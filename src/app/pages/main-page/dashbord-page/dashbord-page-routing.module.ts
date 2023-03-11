import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordPageComponent } from './dashbord-page.component';

const routes: Routes = [{ path: '', component: DashbordPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordPageRoutingModule { }
