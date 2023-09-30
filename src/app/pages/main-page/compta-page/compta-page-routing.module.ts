import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptaPageComponent } from './compta-page.component';
import {MainPageComponent} from "../main-page.component";

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'bilan-journalier',
      pathMatch: 'full'
    },
    {
      path: '',
      component: ComptaPageComponent,
      children: [
        {
          path: 'bilan-journalier',
          children: [
            {
              path: '',
              loadChildren: () => import('./bilan-journalier-page/bilan-journalier-page.module').then(m => m.BilanJournalierPageModule)
            },
          ]
        },
        {
          path: 'bilan-period',
          children: [
            {
              path: '',
              loadChildren: () => import('./bilan-periodique-page/bilan-periodique-page.module').then(m => m.BilanPeriodiquePageModule)
            },
          ]
        },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptaPageRoutingModule { }
