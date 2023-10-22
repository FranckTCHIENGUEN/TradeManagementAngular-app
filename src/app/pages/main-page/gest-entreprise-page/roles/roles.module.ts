import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import {GestEntreprisePageModule} from "../gest-entreprise-page.module";


@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    GestEntreprisePageModule
  ]
})
export class RolesModule { }
