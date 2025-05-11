import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientPageComponent} from './client-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste-client',
    pathMatch: 'full'
  },
  { path: '',
    component: ClientPageComponent,
    children:[
      {
        path: 'liste-client',
        children:[
          {
            path:'',
            loadChildren: () => import('./list-client/list-client.module').then(m => m.ListClientModule)
          },
        ]
      },
      {
        path: 'groupe-client',
        children:[
          {
            path:'',
            loadChildren: () => import('./groupe-client/groupe-client.module').then(m => m.GroupeClientModule)         },
        ]
      },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule { }
