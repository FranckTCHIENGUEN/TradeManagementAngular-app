import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepensePageComponent } from './depense-page.component';

const routes: Routes = [{ path: '', component: DepensePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepensePageRoutingModule { }
