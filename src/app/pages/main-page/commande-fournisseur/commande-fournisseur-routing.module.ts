import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeFournisseurComponent } from './commande-fournisseur.component';
import {CommandPageComponent} from "../command-page/command-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'save-commande-fournisseur',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CommandeFournisseurComponent,
    children:[
      {
        path: 'save-commande-fournisseur',
        children:[
          {
            path:'',
            loadChildren: () => import('./save-com-fournisseur-page/save-com-fournisseur-page.module').then(m => m.SaveComFournisseurPageModule)
          },
        ]
      },
      {
        path: 'list-commande-fournisseur',
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
