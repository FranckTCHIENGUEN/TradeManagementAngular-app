import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashbord',
      pathMatch: 'full'
    },
    {
      path: '',
      component: MainPageComponent,
      children:[
        {
          path: 'dashbord',
          children:[
            {
              path:'',
              loadChildren: () => import('./dashbord-page/dashbord-page.module').then(m => m.DashbordPageModule)
            },
          ]
        },
        {
          path: 'command-client',
          children:[
            {
              path:'',
              loadChildren: () => import('./command-page/command-page.module').then(m => m.CommandPageModule)
            },
          ]
        },
        {
          path: 'vente',
          children:[
            {
              path:'',
              loadChildren: () => import('./vente-page/vente-page.module').then(m => m.VentePageModule)
            },
          ]
        },
        {
          path: 'client',
          children:[
            {
              path:'',
              loadChildren: () => import('./client-page/client-page.module').then(m => m.ClientPageModule)
            },
          ]
        },
        {
          path: 'fournisseur',
          children:[
            {
              path:'',
              loadChildren: () => import('./fournisseur-page/fournisseur-page.module').then(m => m.FournisseurPageModule)
            },
          ]
        },
        {
          path: 'statistique',
          children:[
            {
              path:'',
              loadChildren: () => import('./statistique-page/statistique-page.module').then(m => m.StatistiquePageModule)
            },
          ]
        },
        {
          path: 'produit',
          children:[
            {
              path: '',
              loadChildren: () => import('./produit-page/produit-page.module').then(m => m.ProduitPageModule)
            },
          ]
        },
        {
          path: 'service',
          children:[
            {
              path: '',
              loadChildren: () => import('./service/service.module').then(m => m.ServiceModule)
            },
          ]
        },
        {
          path: 'command-fournisseur',
          children:[
            {
              path: '',
              loadChildren: () => import('./commande-fournisseur/commande-fournisseur.module').then(m => m.CommandeFournisseurModule)
            },
          ]
        },
        {
          path: 'achats',
          children:[
            {
              path: '',
              loadChildren: () => import('./depense-page/depense-page.module').then(m => m.DepensePageModule)
            },
          ]
        },
        {
          path: 'compta',
          children:[
            {
              path: '',
              loadChildren: () => import('./compta-page/compta-page.module').then(m => m.ComptaPageModule)
            },
          ]
        },
        {
          path: 'gest-entreprise',
          children:[
            {
              path: '',
              loadChildren: () => import('./gest-entreprise-page/gest-entreprise-page.module').then(m => m.GestEntreprisePageModule)            },
          ]
        },
    ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
