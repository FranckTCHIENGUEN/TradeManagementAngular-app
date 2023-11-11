import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommandeFournisseurRoutingModule} from './commande-fournisseur-routing.module';
import {CommandeFournisseurComponent} from './commande-fournisseur.component';
import {CommandPageModule} from "../command-page/command-page.module";


@NgModule({
  declarations: [
    CommandeFournisseurComponent
  ],
    imports: [
        CommonModule,
        CommandeFournisseurRoutingModule,
        CommandPageModule
    ]
})
export class CommandeFournisseurModule { }
