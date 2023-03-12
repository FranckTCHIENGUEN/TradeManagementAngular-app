import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveCommandeClientRoutingModule } from './save-commande-client-routing.module';
import { SaveCommandeClientComponent } from './save-commande-client.component';
import {VenteComponent} from "../../../../components/vente/vente.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
    declarations: [
        SaveCommandeClientComponent,
        VenteComponent
    ],
    exports: [
        VenteComponent
    ],
    imports: [
        CommonModule,
        SaveCommandeClientRoutingModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatRadioModule,
        MatAutocompleteModule
    ]
})
export class SaveCommandeClientModule { }
