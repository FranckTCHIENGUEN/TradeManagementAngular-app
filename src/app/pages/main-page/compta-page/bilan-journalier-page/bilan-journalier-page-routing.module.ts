import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilanJournalierPageComponent } from './bilan-journalier-page.component';

const routes: Routes = [{ path: '', component: BilanJournalierPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilanJournalierPageRoutingModule { }
