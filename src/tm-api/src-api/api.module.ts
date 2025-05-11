/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UtilisateurService } from './services/utilisateur.service';
import { GroupeClientService } from './services/groupe-client.service';
import { VenteService } from './services/vente.service';
import { ServiceService } from './services/service.service';
import { RoleService } from './services/role.service';
import { PhotoService } from './services/photo.service';
import { PaiementService } from './services/paiement.service';
import { MouvementDeStockService } from './services/mouvement-de-stock.service';
import { AuthentificationService } from './services/authentification.service';
import { FournisseurService } from './services/fournisseur.service';
import { FiltreDesPersonnesService } from './services/filtre-des-personnes.service';
import { FiltreCommandeService } from './services/filtre-commande.service';
import { EntrepriseService } from './services/entreprise.service';
import { DepenseService } from './services/depense.service';
import { CommandeFournisseurService } from './services/commande-fournisseur.service';
import { CommandeClientService } from './services/commande-client.service';
import { ClientService } from './services/client.service';
import { CategoryService } from './services/category.service';
import { CategorieServiceService } from './services/categorie-service.service';
import { CategorieDepenseService } from './services/categorie-depense.service';
import { ArticleService } from './services/article.service';
import { StatisqueService } from './services/statisque.service';
import { BillService } from './services/bill.service';
import { BilanComptableService } from './services/bilan-comptable.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UtilisateurService,
    GroupeClientService,
    VenteService,
    ServiceService,
    RoleService,
    PhotoService,
    PaiementService,
    MouvementDeStockService,
    AuthentificationService,
    FournisseurService,
    FiltreDesPersonnesService,
    FiltreCommandeService,
    EntrepriseService,
    DepenseService,
    CommandeFournisseurService,
    CommandeClientService,
    ClientService,
    CategoryService,
    CategorieServiceService,
    CategorieDepenseService,
    ArticleService,
    StatisqueService,
    BillService,
    BilanComptableService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
