import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommandPageComponent} from './command-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'save-commande',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CommandPageComponent,
    children:[
      {
        path: 'save-commande',
        children:[
          {
            path:'',
            loadChildren: () => import('./save-commande-client/save-commande-client.module').then(m => m.SaveCommandeClientModule)
          },
        ],
        data: { breadcrumb: 'Détails du produit' }
      },
      {
        path: 'list-commande',
        children:[
          {
            path:'',
            loadChildren: () => import('./list-commande-client/list-commande-client.module').then(m => m.ListCommandeClientModule)          },
        ]
      },
      {
        path: 'detail-commande',
        children:[
          {
            path: '',
            loadChildren: () => import('./details-commande/details-commande.module').then(m => m.DetailsCommandeModule)
          }
        ]
      },
      // {
      //   path: 'detail-commande',
      //   loadChildren: () => import('./list-commande-client/details-commande/details-commande.module').then(m => m.DetailsCommandeModule),
      //   data: { breadcrumb: 'Détails des commandes' }
      // },
    ]
  },
  // { path: 'detailsCommande', loadChildren: () => import('./details-commande/details-commande.module').then(m => m.DetailsCommandeModule) },
  // Suppression de la route globale 'detail-commande' pour accès uniquement via list-commande-client
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandPageRoutingModule { }
