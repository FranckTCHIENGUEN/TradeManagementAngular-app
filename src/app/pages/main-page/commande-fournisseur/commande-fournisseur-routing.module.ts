import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommandeFournisseurComponent} from './commande-fournisseur.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'enregistrer',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CommandeFournisseurComponent,
    children:[
      {
        path: 'enregistrer',
        children:[
          {
            path:'',
            loadChildren: () => import('./save-com-fournisseur-page/save-com-fournisseur-page.module').then(m => m.SaveComFournisseurPageModule)
          },
        ]
      },
      {
        path: 'detail',
        children:[
          {
            path:'',
            loadChildren: () => import('./list-com-fournisseur-page/list-com-fournisseur-page.module').then(m => m.ListComFournisseurPageModule)          },
        ]
      },
    ]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeFournisseurRoutingModule { }
