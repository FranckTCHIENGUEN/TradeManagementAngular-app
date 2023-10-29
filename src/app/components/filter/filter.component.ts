import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {objetFiltreStat} from "../filtre-stat/filtre-stat.component";
import {CommandSearch} from "../../../tm-api/src-api/models/command-search";
import {map, Observable} from "rxjs";
import {ClientDto} from "../../../tm-api/src-api/models/client-dto";
import {FournisseurDto} from "../../../tm-api/src-api/models/fournisseur-dto";
import {AppFournisseurService} from "../../../services/fournisseurService/app-fournisseur.service";
import {ClientAppServiceService} from "../../../services/clientAppService/client-app-service.service";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class FilterComponent {

  saveForm = this.formBuilder.group({
    code:[undefined,[
    ]],
    avance:[undefined,
    ],
    dateLivraison1:[undefined,[
    ]],
    dateLivraison2:[undefined,[
    ]],
    dateRetrait1:[undefined,
    ],
    dateRetrait2:[undefined,
    ],
    datecommande1:[undefined,
    ],
    datecommande2:[undefined,
    ],
    idClient:[undefined,
    ],
    etatCommande:[undefined,
    ],
    montantTotal:[undefined,
    ],
    resteAdonner:[undefined,
    ],
    resteApayer:[undefined,
    ],
  })

  @Output() objetFiltre = new EventEmitter<CommandSearch>();
  @Input() typeEnregistrement: string | undefined;
  etatCommande = ['EN_PREPARATION' , 'RECEPTIONER' , 'VALIDER' , 'LIVRER']
  filteredOptions: Observable<ClientDto[]> | undefined;
  filteredOptionsFournisseur: Observable<FournisseurDto[]> | undefined;
  constructor(private formBuilder:FormBuilder,
              private fournisseurService:AppFournisseurService,
              private clientService:ClientAppServiceService) {
  }

  private _filter(name: string): Observable<ClientDto[]> {
    // const filterValue = name.toLowerCase();

    return this.clientService.findAll().pipe(map(response => response.filter(option => {
      return option.nom?.toLowerCase().indexOf(name.toLowerCase()) === 0
    })))
  }
  private _filterFournisseur(name: string): Observable<FournisseurDto[]> {
    // const filterValue = name.toLowerCase();

    return this.fournisseurService.findAll().pipe(map(response => response.filter(option => {
      return option.nom?.toLowerCase().indexOf(name.toLowerCase()) === 0
    })))
  }
  displayFn(user: ClientDto): string {
    let nom = user?.nom+" "+ user?.prenom
    return user && nom ? nom : '';
  }
  displayFnFournisseur(user: FournisseurDto): string {
    let nom = user?.nom+" "+ user?.prenom
    return user && nom ? nom : '';
  }
  manageFilterPerson(value:string) {
    if (this.typeEnregistrement =="commande client" || this.typeEnregistrement=="vente"){
      this.filteredOptions=this._filter(value);
    }
    if (this.typeEnregistrement =="commande fournisseur"){
      this.filteredOptionsFournisseur=this._filterFournisseur(value);
    }

  }

  formSubmit() {

    let person:any = this.saveForm.controls.idClient.value;
    let objet:CommandSearch={
      dateLivraison1:this.saveForm.controls.dateLivraison1.value as string | undefined,
      dateLivraison2:this.saveForm.controls.dateLivraison2.value as string | undefined,
      dateRetrait1:this.saveForm.controls.dateRetrait1.value as string | undefined,
      dateRetrait2:this.saveForm.controls.dateRetrait2.value as string | undefined,
      datecommande1:this.saveForm.controls.datecommande1.value as string | undefined,
      datecommande2:this.saveForm.controls.datecommande2.value as string | undefined,
      code:this.saveForm.controls.code.value as string | undefined,
      etatCommande:this.saveForm.controls.etatCommande.value as "EN_PREPARATION" | "RECEPTIONNER" | "VALIDER" | "LIVRER" | undefined,
      avance:this.saveForm.controls.avance.value as number | undefined,
      idClient:person?.id as number | undefined,
      montantTotal:this.saveForm.controls.montantTotal.value as number | undefined,
      resteAdonner:this.saveForm.controls.resteAdonner.value as number | undefined,
      resteApayer:this.saveForm.controls.resteApayer.value as number | undefined,
    }
    this.objetFiltre.emit(objet);
  }
}
