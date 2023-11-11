import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AchatPageRoutingModule} from './achat-page-routing.module';
import {AchatPageComponent} from './achat-page.component';
import {FiltreStatComponent} from "../../../../components/filtre-stat/filtre-stat.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    declarations: [
        AchatPageComponent,
        FiltreStatComponent
    ],
    exports: [
        FiltreStatComponent
    ],
    imports: [
        CommonModule,
        AchatPageRoutingModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatIconModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
    ]
})
export class AchatPageModule { }
