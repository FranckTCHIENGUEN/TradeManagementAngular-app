import {Component, EventEmitter, Input, Output} from '@angular/core';
import {map, Observable} from "rxjs";
import {ClientDto} from "../../../tm-api/src-api/models/client-dto";
import {FournisseurDto} from "../../../tm-api/src-api/models/fournisseur-dto";
import {FormBuilder} from "@angular/forms";
import {AppFournisseurService} from "../../../services/fournisseurService/app-fournisseur.service";
import {ClientAppServiceService} from "../../../services/clientAppService/client-app-service.service";
import {PersonSearchDto} from "../../../tm-api/src-api/models/person-search-dto";
import {AdresseDto} from "../../../tm-api/src-api/models/adresse-dto";
import {CompteClientDto} from "../../../tm-api/src-api/models/compte-client-dto";

@Component({
    selector: 'app-filter-person',
    templateUrl: './filter-person.component.html',
    styleUrls: ['./filter-person.component.scss'],
    standalone: false
})
export class FilterPersonComponent {
  saveForm = this.formBuilder.group({
    nom:[undefined,[
    ]],
    tel:[undefined,
    ],
    mail:[undefined,[
    ]],
    quartier:[undefined,[
    ]],
    ville:[undefined,
    ],
    pays:[undefined,
    ],
    ca:[undefined,
    ],
    solde:[undefined,
    ],
    nbreVisite:[undefined,
    ],
  })

  @Output() objetFiltre = new EventEmitter<PersonSearchDto>();
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
    let nom = user.nom+" "+ user.prenom
    return user && nom ? nom : '';
  }
  displayFnFournisseur(user: FournisseurDto): string {
    let nom = user.nom+" "+ user.prenom
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

    let person:any = this.saveForm.controls.nom.value;
    let objet:PersonSearchDto={
      nom:person as string | undefined,
      prenom:person as string | undefined,
      mail:this.saveForm.controls.mail.value as string | undefined,
      tel:this.saveForm.controls.tel.value as string | undefined,
    }
    let adresse:AdresseDto={
      adresse1:this.saveForm.controls.quartier.value as string | undefined,
      adresse2: undefined,
      pays:this.saveForm.controls.pays.value as string | undefined,
      ville:this.saveForm.controls.ville.value as string | undefined,
      codePostal:undefined
    }

    let compte:CompteClientDto={
      ca:this.saveForm.controls.ca.value as number | undefined,
      solde:this.saveForm.controls.solde.value as number | undefined,
      nbreVisite:this.saveForm.controls.nbreVisite.value as number | undefined,
    }

    objet.adresse = adresse;
    objet.compteClientDto = compte;

    console.log(objet)
    this.objetFiltre.emit(objet);
  }
}
