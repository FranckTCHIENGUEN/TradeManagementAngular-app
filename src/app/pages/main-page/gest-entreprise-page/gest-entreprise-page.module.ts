import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GestEntreprisePageRoutingModule} from './gest-entreprise-page-routing.module';
import {GestEntreprisePageComponent} from './gest-entreprise-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {UtilisateurComponent} from "../../../components/utilisateur/utilisateur.component";
import {RolesComponent} from "../../../components/roles/roles.component";
import {ListeVentePageModule} from "../vente-page/liste-vente-page/liste-vente-page.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {CommandPageModule} from "../command-page/command-page.module";


@NgModule({
  declarations: [
    GestEntreprisePageComponent,
    UtilisateurComponent,
    RolesComponent
  ],
    exports: [
        UtilisateurComponent,
        RolesComponent
    ],
  imports: [
    CommonModule,
    GestEntreprisePageRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    ListeVentePageModule,
    MatListModule,
    MatIconModule,
    CommandPageModule
  ]
})
export class GestEntreprisePageModule { }
