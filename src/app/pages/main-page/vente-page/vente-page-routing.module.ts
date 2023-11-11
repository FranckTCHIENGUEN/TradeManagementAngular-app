import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VentePageComponent} from './vente-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'save-vente',
    pathMatch: 'full'
  },
  {
    path: '',
    component: VentePageComponent,
    children:[
      {
        path: 'save-vente',
        children:[
          {
            path:'',
            loadChildren: () => import('./save-vente-page/save-vente-page.module').then(m => m.SaveVentePageModule)
          },
        ]
      },
      {
        path: 'list-vente',
        children:[
          {
            path:'',
            loadChildren: () => import('./liste-vente-page/liste-vente-page.module').then(m => m.ListeVentePageModule)          },
        ]
      },
    ]
  },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentePageRoutingModule { }
