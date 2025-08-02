import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCommandeClientComponent} from './list-commande-client.component';
import {CommandPageComponent} from "../command-page.component";

const routes: Routes = [

  {
    path: '',
    component: ListCommandeClientComponent,
    children:[
      // {
      //   path: 'detail-commande',
      //   // children:[
      //   //   {
      //   //     path: '',
      //       loadChildren: () => import('./details-commande/details-commande.module').then(m => m.DetailsCommandeModule),
      //   //   },
      //   // ],
      //   data: { breadcrumb: 'Détails des commandes' }
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCommandeClientRoutingModule {
}
