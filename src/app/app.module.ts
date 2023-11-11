import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {SavePersonDialogComponent} from './components/save-person-dialog/save-person-dialog.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ListViewDetailDialogComponent} from './components/list-view-detail-dialog/list-view-detail-dialog.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDialogModule} from "@angular/material/dialog";
import {ProductDetailDialogComponent} from './components/product-detail-dialog/product-detail-dialog.component';
import {ServiceDetailDialogComponent} from './components/service-detail-dialog/service-detail-dialog.component';
import {SaveProductDialogComponent} from './components/save-product-dialog/save-product-dialog.component';
import {SaveServiceDialogComponent} from './components/save-service-dialog/save-service-dialog.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {AppLoaderComponent} from './components/app-loader/app-loader.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoaderService} from "../services/loader/loader.service";
import {InterceptorService} from "../services/interceptor/interceptor.service";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {PersonViewDetailComponent} from './components/person-view-detail/person-view-detail.component';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {ConfirmDeleteDialogComponent} from './components/confirm-delete-dialog/confirm-delete-dialog.component';
import {AddCategorieDialogComponent} from './components/add-categorie-dialog/add-categorie-dialog.component';
import {ViewCatDialogComponent} from './components/view-cat-dialog/view-cat-dialog.component';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import {SaveDepenseDialogComponent} from './components/save-depense-dialog/save-depense-dialog.component';
import {AddPaiementDialogComponent} from './components/add-paiement-dialog/add-paiement-dialog.component';
import {AddLigneCommandeComponent} from './components/add-ligne-commande/add-ligne-commande.component';
import {UpdateEtatDialogComponent} from './components/update-etat-dialog/update-etat-dialog.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ListeVentePageModule} from "./pages/main-page/vente-page/liste-vente-page/liste-vente-page.module";
import {ViewDetailBilanDialogComponent} from './components/view-detail-bilan-dialog/view-detail-bilan-dialog.component';
import {ViewenterpriseDialogComponent} from './components/viewenterprise-dialog/viewenterprise-dialog.component';
import {ChangePasswordDialogComponent} from './components/change-password-dialog/change-password-dialog.component';
import {FactureDialogComponent} from './components/facture-dialog/facture-dialog.component';
import {NgxPrintModule} from "ngx-print";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {SaveRoleDialogComponent} from './components/save-role-dialog/save-role-dialog.component';
import {MatMenuModule} from "@angular/material/menu";
import {AddRoleToUserComponent} from './components/add-role-to-user/add-role-to-user.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        SavePersonDialogComponent,
        ListViewDetailDialogComponent,
        RegisterPageComponent,
        ProductDetailDialogComponent,
        ServiceDetailDialogComponent,
        SaveProductDialogComponent,
        SaveServiceDialogComponent,
        AppLoaderComponent,
        PersonViewDetailComponent,
        ConfirmDialogComponent,
        ConfirmDeleteDialogComponent,
        AddCategorieDialogComponent,
        ViewCatDialogComponent,
        SaveDepenseDialogComponent,
        AddPaiementDialogComponent,
        AddLigneCommandeComponent,
        UpdateEtatDialogComponent,
        ViewDetailBilanDialogComponent,
        ViewenterpriseDialogComponent,
        ChangePasswordDialogComponent,
        FactureDialogComponent,
        SaveRoleDialogComponent,
        AddRoleToUserComponent,

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
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
        MatExpansionModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        ListeVentePageModule,
        NgxPrintModule,
        MatSlideToggleModule,
        MatMenuModule
    ],
    providers: [
      {
        provide:HTTP_INTERCEPTORS,
        useClass:InterceptorService,
        multi:true
      },
      { provide: LOCALE_ID, useValue: 'fr-CMR'},
      LoaderService
    ],
    exports: [
        ListViewDetailDialogComponent,
        AppLoaderComponent,

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
