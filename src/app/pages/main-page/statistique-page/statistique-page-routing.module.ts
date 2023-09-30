import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatistiquePageComponent} from './statistique-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'etat-financier',
    pathMatch: 'full'
  },
  {
    path: '',
    component: StatistiquePageComponent,
    children: [
      {
        path: 'etat-financier',
        children: [
          {
            path: '',
            loadChildren: () => import('./etat-financier-page/etat-financier-page.module').then(m => m.EtatFinancierPageModule)
          },
        ]
      },
      {
        path: 'stat-ca',
        children: [
          {
            path: '',
            loadChildren: () => import('./ca-page/ca-page.module').then(m => m.CaPageModule)
          },
        ]
      },
      {
        path: 'stat-achat',
        children: [
          {
            path: '',
            loadChildren: () => import('./achat-page/achat-page.module').then(m => m.AchatPageModule)
          },
        ]
      },
      {
        path: 'stat-sale',
        children: [
          {
            path: '',
            loadChildren: () => import('./vente-page/vente-page.module').then(m => m.VentePageModule)
          },
        ]
      },
      {
        path: 'stat-benefice',
        children: [
          {
            path: '',
            loadChildren: () => import('./benefice-page/benefice-page.module').then(m => m.BeneficePageModule)
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiquePageRoutingModule {
}
