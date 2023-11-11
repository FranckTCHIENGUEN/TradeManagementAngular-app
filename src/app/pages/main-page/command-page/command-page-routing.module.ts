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
        ]
      },
      {
        path: 'list-commande',
        children:[
          {
            path:'',
            loadChildren: () => import('./list-commande-client/list-commande-client.module').then(m => m.ListCommandeClientModule)          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandPageRoutingModule { }
