import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupeClientRoutingModule } from './groupe-client-routing.module';
import { GroupeClientComponent } from './groupe-client.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    GroupeClientComponent
  ],
  imports: [
    CommonModule,
    GroupeClientRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ]
})
export class GroupeClientModule { }
