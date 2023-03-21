import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import { PrimaryMenuComponent } from './components/primary-menu/primary-menu.component';
import {MatListModule} from "@angular/material/list";
import { VenteComponent } from './components/vente/vente.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { SecondaryMenuComponent } from './components/secondary-menu/secondary-menu.component';
import {MatSelectModule} from "@angular/material/select";
import { PersonComponent } from './components/person/person.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { SavePersonDialogComponent } from './components/save-person-dialog/save-person-dialog.component';
import { FilterComponent } from './components/filter/filter.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ListViewDetailDialogComponent } from './components/list-view-detail-dialog/list-view-detail-dialog.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDialogModule} from "@angular/material/dialog";
import { ViewProductComponent } from './components/view-product/view-product.component';
import { ProductDetailDialogComponent } from './components/product-detail-dialog/product-detail-dialog.component';
import { ServiceDetailDialogComponent } from './components/service-detail-dialog/service-detail-dialog.component';
import { SaveProductDialogComponent } from './components/save-product-dialog/save-product-dialog.component';
import { SaveServiceDialogComponent } from './components/save-service-dialog/save-service-dialog.component';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        SavePersonDialogComponent,
        FilterComponent,
        ListViewDetailDialogComponent,

        ProductDetailDialogComponent,
        ServiceDetailDialogComponent,
        SaveProductDialogComponent,
        SaveServiceDialogComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule
  ],
    providers: [],
    exports: [
        ListViewDetailDialogComponent,

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
