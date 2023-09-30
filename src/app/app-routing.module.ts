import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {GuardService} from "../services/guard/guard.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:"full"
  },
  {
    path: 'login',
    component:LoginPageComponent
  },
  {
    path: 'register',
    component:RegisterPageComponent,
  },
  {
    path: 'mainPage',
    loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
