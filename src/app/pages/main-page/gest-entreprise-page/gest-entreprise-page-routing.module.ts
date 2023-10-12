import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestEntreprisePageComponent } from './gest-entreprise-page.component';
import {CommandeFournisseurComponent} from "../commande-fournisseur/commande-fournisseur.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: '',
    component:GestEntreprisePageComponent ,
    children:[
      {
        path: 'users',
        children:[
          {
            path:'',
            loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
          },
        ]
      },
      {
        path: 'roles',
        children:[
          {
            path:'',
            loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
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
export class GestEntreprisePageRoutingModule { }
