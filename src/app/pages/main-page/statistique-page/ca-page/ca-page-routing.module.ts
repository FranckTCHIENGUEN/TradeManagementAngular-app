import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaPageComponent } from './ca-page.component';

const routes: Routes = [{ path: '', component: CaPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaPageRoutingModule { }
