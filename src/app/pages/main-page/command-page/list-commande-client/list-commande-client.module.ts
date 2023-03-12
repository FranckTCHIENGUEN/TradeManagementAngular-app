import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCommandeClientRoutingModule } from './list-commande-client-routing.module';
import { ListCommandeClientComponent } from './list-commande-client.component';
import {ListViewComponent} from "../../../../components/list-view/list-view.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    ListCommandeClientComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    ListCommandeClientRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  exports:[
    ListViewComponent
  ]
})
export class ListCommandeClientModule { }
