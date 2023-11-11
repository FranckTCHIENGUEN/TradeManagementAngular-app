import {Component, Input, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from "rxjs";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/fr';
import {AppFournisseurService} from "../../../services/fournisseurService/app-fournisseur.service";
import {ClientAppServiceService} from "../../../services/clientAppService/client-app-service.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {ServiceDto} from "../../../tm-api/src-api/models/service-dto";
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {SaveProductDialogComponent} from "../save-product-dialog/save-product-dialog.component";
import {AppProductService} from "../../../services/productService/app-product.service";
import {ClientDto} from "../../../tm-api/src-api/models/client-dto";
import {
  CommandeClientDto,
  CommandeFournisseurDto,
  CompteClientDto,
  FournisseurDto,
  LigneCommandeClientDto,
  LigneCommandeFournisseurDto,
  LigneVenteDto,
  PaiementDto,
  StatServiceDto,
  UtilisateurDto,
  VenteDto
} from "../../../tm-api/src-api/models";
import {AppVenbteServiceService} from "../../../services/venteService/app-venbte-service.service";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {AppServiceService} from "../../../services/serviceService/app-service.service";
import {SaveServiceDialogComponent} from "../save-service-dialog/save-service-dialog.component";
import {
  AppCommandFournisseurService
} from "../../../services/commandFournisseurService/app-command-fournisseur.service";
import {AppCommandClientService} from "../../../services/commandClientService/app-command-client.service";
import * as moment from "moment/moment";

export interface User {
  name: string;
}
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss'],
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
export class VenteComponent implements OnInit{
  personnes: Array<ClientDto> =[];
  personnes2: Array<FournisseurDto> =[];
  saveForm = this.formBuilder.group({
    personne:['',[
      Validators.required
    ]],

    etatCommande:['RECEPTIONNER',[

    ]],

    dateRetrait:[moment(),[

    ]],
    dateCommande:[moment(),[
      Validators.required
    ]],
    montantTotal:[0,[

    ]],
    avance:[0,[

    ]],
    resteAPayer:[0,[

    ]],
    resteAdonner:[0,[
    ]],
    ligneCom:this.formBuilder.array([

    ]),
    paiement:this.formBuilder.array([

    ]),
  })
  filteredOptions: Observable<ClientDto[]> | undefined;
  filteredOptionsFournisseur: Observable<FournisseurDto[]> | undefined;
  filteredElement: Observable<ArticleDto[]> | undefined;
  filteredElement2: Observable<StatServiceDto[]> | undefined;
  type: any;
  today = new Date().getDate();
  private _isSubmited = false;
  private _resteAdonner: number = 0;
  private _montantTotal: number = 0;
  private _Restepayer: number = 0;
  selected: any;
  etatCommande = ['EN_PREPARATION' , 'RECEPTIONER' , 'VALIDER' , 'LIVRER']
  modePaiement = ['MOBILE_MONNEY' , 'ORANGE_MONNEY' , 'REMBOURSSEMENT' , 'ESPECE']
  @Input() typeEnregistrement: string | undefined;
  elements: any ;
  modeVisible = true
  products: Array<ArticleDto> =[] ;
  permission: Array<string> = [];

  constructor(private formBuilder:FormBuilder,
              private produitService:AppProductService,
              private serviceService:AppServiceService,
              private dialog: MatDialog,
              private fournisseurService:AppFournisseurService,
              private venteService:AppVenbteServiceService,
              private comFournisseurService:AppCommandFournisseurService,
              private comClientService:AppCommandClientService,
              private clientService:ClientAppServiceService) {
    if (this.typeEnregistrement == "commande fournisseur"){
      this.modeVisible = false
    }
    this.getPermissions();
  }

  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }
  findAll(){
    if (this.permission.includes('CLIENT: LIRE')){
      if ((this.typeEnregistrement =="commande client" || this.typeEnregistrement=="vente")){
        this.clientService.findAll().subscribe(
          value => {
            this.personnes = value
          }
        )
      }
    }
    if (this.permission.includes('FOURNISSEUR: LIRE')){
      if (this.typeEnregistrement =="commande fournisseur"){
        this.fournisseurService.findAll().subscribe(
          value => {
            this.personnes2 = value
          }
        )
      }
    }


  }

  get resteAdonner(): number {
    return this._resteAdonner;
  }

  get montantTotal(): number {
    return this._montantTotal;
  }


  get ligneCom (){
    return this.saveForm.controls["ligneCom"] as FormArray;
  }
  get paiement (){
    return this.saveForm.controls["paiement"] as FormArray;
  }

  ngOnInit() {
    this.filteredOptions = this.saveForm.controls.personne.valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(val => {
          return this._filter(val || '')
        })
      );
    this.addLigne();
    this.addPaiement();
  }

  displayFn(user: ClientDto): string {
    let nom = user.nom+" "+ user.prenom
    return user && nom ? nom : '';
  }
  displayFnFournisseur(user: FournisseurDto): string {
    let nom = user.nom+" "+ user.prenom
    return user && nom ? nom : '';
  }
  displayFnPaiement(user: CompteClientDto): string {
    let nom = user.numeroCompte
    return user && nom ? nom : '';
  }
  displayFnElement(user: any): string {
    let nom = user.designation
    return user && nom ? nom : '';
  }

  displayFnElementService(user: ServiceDto): string {
    let nom = user.nom
    return user && nom ? nom : '';
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
  private _filterElement(name: string): Observable<ArticleDto[]> {
    // const filterValue = name.toLowerCase();


      return this.produitService.findAll().pipe(map(response => response.filter(option => {
        return option.designation?.toLowerCase().indexOf(name.toLowerCase()) === 0
      })))


  }

  private _filterElementService(name: string): Observable<StatServiceDto[]> {
    // const filterValue = name.toLowerCase();


      return this.serviceService.findAll().pipe(map(response => response.filter(option => {
        return option.serviceDto?.nom?.toLowerCase().indexOf(name.toLowerCase()) === 0
      })))


  }

  addLigne() {
    const ligneComForm = this.formBuilder.group({
      objet: ['', Validators.required],
      description: ['',],
      quantite: [0,],
      type:['',[
        Validators.required
      ]],
      prixUnitaire: [0, Validators.required],
      prixTotal: [0, Validators.required],
    });


    this.ligneCom.push(ligneComForm);
    this.calculmontantTotal();
    this.calculRestepayer();
  }

  manageChangeFilter(index:number){
    if (this.ligneCom.at(index).get('type')?.value == "SERVICE"){
      this.filteredElement2 = this._filterElementService(this.ligneCom.at(index).get('objet')?.value);
    }
    if (this.ligneCom.at(index).get('type')?.value == "PRODUIT"){
      this.filteredElement = this._filterElement(this.ligneCom.at(index).get('objet')?.value);
    }


  }
  manageFilterPerson(value:string) {
    if (this.typeEnregistrement =="commande client" || this.typeEnregistrement=="vente"){
      this.filteredOptions=this._filter(value);
    }
    if (this.typeEnregistrement =="commande fournisseur"){
      this.filteredOptionsFournisseur=this._filterFournisseur(value);
    }

  }
  manageChangeFilterPaiement(index:number){

    this.filteredElement = this._filterElement(this.paiement.at(index).get('objet')?.value);
  }

  addPaiement() {
    const paiementForm = this.formBuilder.group({
      objet: ['', ],
      comptePayeur: ['', ],
      resteAPayer:[0,[

      ]],
      resteAdonner:[0,[

      ]],
      modePaiement:[null,[
        Validators.required
      ]],
      montant: [0, Validators.required],
    });

    this.paiement.push(paiementForm);
    this.calculmontantTotal();
    this.calculRestepayer();
  }

  private calculPaiement(){
    for (let i = 0; i < this.paiement.length; i++) {

      if (i==0){
        let mT = this.saveForm.controls["montantTotal"].value;
        let reste = mT! - this.paiement.at(i).get('montant')?.value;

        if (reste >= 0){
          this.paiement.at(i).get('resteAPayer')?.patchValue(reste);
          this.paiement.at(i).get('resteAdonner')?.patchValue(0);
        }
        else if(reste < 0){
          this.paiement.at(i).get('resteAPayer')?.patchValue(0);
          this.paiement.at(i).get('resteAdonner')?.patchValue(-1*reste);
        }
      }
      else if (i==1){
        let mT = this.paiement.at(1).get('montant')?.value + this.paiement.at(0).get('montant')?.value
        let reste = mT! - this.paiement.at(i).get('montant')?.value;

        if (reste >= 0){
          this.paiement.at(i).get('resteAPayer')?.patchValue(reste);
          this.paiement.at(i).get('resteAdonner')?.patchValue(0);
        }
        else if(reste < 0){
          this.paiement.at(i).get('resteAPayer')?.patchValue(0);
          this.paiement.at(i).get('resteAdonner')?.patchValue(-1*reste);
        }
      }
      else{
        let mT = 0
        for (let j = 0; j < i+1; j++) {
          mT = mT + this.paiement.at(j).get('montant')?.value
        }

        let reste = mT! - this.paiement.at(i).get('montant')?.value;

        if (reste >= 0){
          this.paiement.at(i).get('resteAPayer')?.patchValue(reste);
          this.paiement.at(i).get('resteAdonner')?.patchValue(0);
        }
        else if(reste < 0){
          this.paiement.at(i).get('resteAPayer')?.patchValue(0);
          this.paiement.at(i).get('resteAdonner')?.patchValue(-1*reste);
        }
      }


    }
  }

  deleteLigneCom(ligneComIndex: number) {
    this.ligneCom.removeAt(ligneComIndex);
    this.calculmontantTotal();
    this.calculRestepayer();
  }
  deleteLignePai(lignePaiIndex: number) {
    this.paiement.removeAt(lignePaiIndex);
    this.calculmontantTotal();
    this.calculRestepayer();
  }


  calculmontant(i: number) {
    this.ligneCom.at(i).get("prixTotal")?.patchValue(
      this.ligneCom.at(i).get("quantite")?.value * this.ligneCom.at(i).get("prixUnitaire")?.value as number
    )
    this.calculmontantTotal();
    this.calculRestepayer();
  }

  calculmontantTotal() {
    let montant:number = 0;

    for (let i = 0; i < this.ligneCom.length; i++) {
      montant = montant + this.ligneCom.at(i).get('prixTotal')?.value;
    }
    this.saveForm.controls["montantTotal"].patchValue(montant);
  }

  calculRestepayer() {
    let number = (this.saveForm.controls.montantTotal.value as number) - (this.saveForm.controls.avance.value as number)
    if (number < 0){
      this.calculrestedonner(number);
      number = 0;
    }
    else if (number >= 0){
      this.calculrestedonner(-0)
    }
    this.saveForm.controls["resteAPayer"].patchValue(number)
    this.calculPaiement();
    this._Restepayer = number;
  }

  calculrestedonner(number:number) {
    this._resteAdonner = number * (-1);
    this.saveForm.controls["resteAdonner"].patchValue(this._resteAdonner)
  }

  formSubmit() {
    this._isSubmited = true;

    if (!this.saveForm.valid) {
      console.log(this.saveForm.getError("required"))

    }
    else {
      let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);
      this.calculPaiement();

      if (this.typeEnregistrement=="vente"){
        let data: VenteDto = {};


        data.client = this.saveForm.controls.personne.value  as ClientDto;
        data.avance = this.saveForm.controls.avance.value as number;
        data.datevente = this.saveForm.controls.dateCommande.value?.toISOString() as string;
        data.montantTotal = this.saveForm.controls.montantTotal.value as number;
        data.resteAdonner = this.saveForm.controls.resteAdonner.value as number;
        data.resteApayer = this.saveForm.controls.resteAPayer.value as number;
        data.idEntreprise = userConnected.entreprise?.id as number;

        let paieEle:Array<PaiementDto> = [];
        for (let i = 0; i < this.paiement.length; i++) {
          let compte:string | undefined;
          if (this.paiement.at(i).get('modePaiement')?.value =='REMBOURSSEMENT'){
            let numero: CompteClientDto = this.paiement.at(i).get('comptePayeur')?.value as CompteClientDto;

            compte = numero.numeroCompte;
          }
          else {
            compte = this.paiement.at(i).get('comptePayeur')?.value
          }

          const pai:PaiementDto = {
            idEntreprise:userConnected.entreprise?.id,
            montant : this.paiement.at(i).get('montant')?.value as number,
            mode : this.paiement.at(i).get('modePaiement')?.value,
            objet : 'VENTE',
            datepaiement: new Date().toISOString(),
            resteApayer:this.paiement.at(i).get('resteAPayer')?.value,
            resteAdonner: this.paiement.at(i).get('resteAdonner')?.value,
            comptePayeur : compte
          };


          paieEle.push(pai);
        }

        let ele :Array<LigneVenteDto> = [];

        for (let i = 0; i < this.ligneCom.length; i++) {
          const object : any = this.ligneCom.at(i).get('objet')?.value

          const lig:LigneVenteDto = {
           idEntreprise : userConnected.entreprise?.id,
            idType :object.id,
           type : this.ligneCom.at(i).get('type')?.value,
           prixTotal : this.ligneCom.at(i).get('prixTotal')?.value as number,
           quantite : this.ligneCom.at(i).get('quantite')?.value as number,
           prixunitaire : this.ligneCom.at(i).get('prixUnitaire')?.value as number,
           description : this.ligneCom.at(i).get('description')?.value as string
          };

          ele.push(lig)
        }

        data.ligneVentes = ele;
        data.paiementDtoList = paieEle

        this.venteService.save(data)
          .subscribe(value => {
            this.saveForm.reset();
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: this.typeEnregistrement + " enregisgré avec succé",
              },
            });
          })
      }
      if (this.typeEnregistrement =="commande fournisseur" ){
        let data: CommandeFournisseurDto = {};

        data.fournisseur = this.saveForm.controls.personne.value  as FournisseurDto;
        data.avance = this.saveForm.controls.avance.value as number;
        data.datecommande = this.saveForm.controls.dateCommande.value?.toISOString() as string;
        data.dateLivraison = this.saveForm.controls.dateRetrait.value?.toISOString() as string;
        data.montantTotal = this.saveForm.controls.montantTotal.value as number;
        data.resteAdonner = this.saveForm.controls.resteAdonner.value as number;
        data.resteApayer = this.saveForm.controls.resteAPayer.value as number;
        data.etatCommande = this.saveForm.controls.etatCommande.value as "EN_PREPARATION" | "RECEPTIONNER" | "VALIDER" | "LIVRER";
        data.idEntreprise = userConnected.entreprise?.id as number;

        let paieEle:Array<PaiementDto> = [];
        for (let i = 0; i < this.paiement.length; i++) {
          let compte:string | undefined;
          if (this.paiement.at(i).get('modePaiement')?.value =='REMBOURSSEMENT'){
            let numero: CompteClientDto = this.paiement.at(i).get('comptePayeur')?.value as CompteClientDto;

            compte = numero.numeroCompte;
          }
          else {
            compte = this.paiement.at(i).get('comptePayeur')?.value
          }

          const pai:PaiementDto = {
            idEntreprise:userConnected.entreprise?.id,
            montant : this.paiement.at(i).get('montant')?.value as number,
            mode : this.paiement.at(i).get('modePaiement')?.value,
            objet : 'CF',
            datepaiement:new Date().toISOString(),
            resteApayer:this.paiement.at(i).get('resteAPayer')?.value,
            resteAdonner: this.paiement.at(i).get('resteAdonner')?.value,
            comptePayeur : compte
          };
          paieEle.push(pai);
        }

        let ele :Array<LigneCommandeFournisseurDto> = [];

        for (let i = 0; i < this.ligneCom.length; i++) {
          const object : any = this.ligneCom.at(i).get('objet')?.value

          const lig:LigneCommandeFournisseurDto = {
            idEntreprise : userConnected.entreprise?.id,
            idType :object.id,
            type : this.ligneCom.at(i).get('type')?.value,
            prixTotal : this.ligneCom.at(i).get('prixTotal')?.value as number,
            quantite : this.ligneCom.at(i).get('quantite')?.value as number,
            prixunitaire : this.ligneCom.at(i).get('prixUnitaire')?.value as number,
            description : this.ligneCom.at(i).get('description')?.value as string
          };

          ele.push(lig)
        }

        data.ligneCommandeFournisseurs = ele;
        data.paiementDtoList = paieEle

        this.comFournisseurService.save(data)
          .subscribe(value => {
            this.saveForm.reset();
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: this.typeEnregistrement + " enregisgré avec succé",
              },
            });
          })
      }
      if (this.typeEnregistrement =="commande client"){
        let data: CommandeClientDto = {};

        data.client = this.saveForm.controls.personne.value  as ClientDto;
        data.avance = this.saveForm.controls.avance.value as number;
        data.datecommande = this.saveForm.controls.dateCommande.value?.toISOString() as string;
        data.dateRetrait = this.saveForm.controls.dateRetrait.value?.toISOString() as string;
        data.montantTotal = this.saveForm.controls.montantTotal.value as number;
        data.resteAdonner = this.saveForm.controls.resteAdonner.value as number;
        data.resteApayer = this.saveForm.controls.resteAPayer.value as number;
        data.etatCommande = this.saveForm.controls.etatCommande.value as "EN_PREPARATION" | "RECEPTIONNER" | "VALIDER" | "LIVRER";
        data.idEntreprise = userConnected.entreprise?.id as number;

        let paieEle:Array<PaiementDto> = [];
        for (let i = 0; i < this.paiement.length; i++) {
          let compte:string | undefined;
          if (this.paiement.at(i).get('modePaiement')?.value =='REMBOURSSEMENT'){
            let numero: CompteClientDto = this.paiement.at(i).get('comptePayeur')?.value as CompteClientDto;

            compte = numero.numeroCompte;
          }
          else {
            compte = this.paiement.at(i).get('comptePayeur')?.value
          }

          const pai:PaiementDto = {
            idEntreprise:userConnected.entreprise?.id,
            montant : this.paiement.at(i).get('montant')?.value as number,
            mode : this.paiement.at(i).get('modePaiement')?.value,
            objet : 'CC',
            datepaiement:new Date().toISOString(),
            resteApayer:this.paiement.at(i).get('resteAPayer')?.value,
            resteAdonner: this.paiement.at(i).get('resteAdonner')?.value,
            comptePayeur : compte
          };


          paieEle.push(pai);
        }

        let ele :Array<LigneCommandeClientDto> = [];

        for (let i = 0; i < this.ligneCom.length; i++) {
          const object : any = this.ligneCom.at(i).get('objet')?.value

          const lig:LigneCommandeClientDto = {
            idEntreprise : userConnected.entreprise?.id,
            idType :object.id,
            type : this.ligneCom.at(i).get('type')?.value,
            prixTotal : this.ligneCom.at(i).get('prixTotal')?.value as number,
            quantite : this.ligneCom.at(i).get('quantite')?.value as number,
            prixunitaire : this.ligneCom.at(i).get('prixUnitaire')?.value as number,
            description : this.ligneCom.at(i).get('description')?.value as string
          };

          ele.push(lig)
        }

        data.ligneCommandeClients = ele;
        data.paiementDtoList = paieEle

        this.comClientService.save(data)
          .subscribe(value => {
            this.saveForm.reset();
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: this.typeEnregistrement + " enregisgré avec succé",
              },
            });
          })
      }

    }
  }

  nouveauClient() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    let typePersonne;
    if (this.typeEnregistrement =="commande client" || this.typeEnregistrement=="vente"){
      typePersonne = "client"
    }
    if (this.typeEnregistrement =="commande fournisseur"){
      typePersonne = "fournisseur"
    }
    dialogConfig.data= {
      typePersonne:typePersonne
    };

    this.dialog.open(SavePersonDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SavePersonDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          // this.findAll();
        }
      }
    );
    dialogRef.close();
  }

  nouveau(i:number) {
    if (this.ligneCom.at(i).get('type')?.value == "SERVICE" && this.permission.includes('SERVICE: CRÉER_MODIFIER')){
      this.dialog.open(SaveServiceDialogComponent, {
        height: '75%',
        width: '90%',
        disableClose:false,
        data: {

        },
      }).afterClosed().subscribe(
        data => {
          if (data=="ok"){

            // this.ngOnInit();
          }
        }
      );
    }
    if (this.ligneCom.at(i).get('type')?.value== "PRODUIT" && this.permission.includes('PRODUIT: CRÉER_MODIFIER')){
      this.dialog.open(SaveProductDialogComponent, {
        height: '75%',
        width: '90%',
        disableClose:false,
        data: {

        },
      }).afterClosed().subscribe(
        data => {
          if (data=="ok"){

            // this.ngOnInit();
          }
        }
      );
    }
  }

  // findAllElement(){
  //   if (this.ligneCom.at(i).get('type')?.value== "SERVICE"){
  //
  //   }
  //   if (this.ligneCom.at(i).get('type')?.value == "PRODUIT"){
  //     this.produitService.findAll().subscribe(
  //       value => {
  //         this.elements = value
  //       }
  //     );
  //   }
  // }

  // isDisable() {
  //   let disable = true
  //   if (this.ligneCom.length >0){
  //     disable=false;
  //   }
  //   return disable;
  // }

  calculAvance(index:number) {
    let montant:number = 0;
    for (let i = 0; i < this.paiement.length; i++) {
      montant = montant + this.paiement.at(i).get('montant')?.value;
    }

    this.saveForm.controls.avance.patchValue(montant);
    this.calculRestepayer();
    this.paiement.at(index).get("resteAPayer")?.patchValue(
      ((this.saveForm.controls.montantTotal.value as number) - (this.saveForm.controls.avance.value as number)) as number
    )

    if (this.paiement.at(index).get("resteAPayer")?.value <0){
      this.paiement.at(index).get("resteAdonner")?.patchValue(this.paiement.at(index).get("resteAPayer")?.value*(-1))
      this.paiement.at(index).get("resteAPayer")?.patchValue(0);

    }
  }


  // detectRequired(index:number) {
  //   return this.paiement.at(index).get('modePaiement')?.value != 'ESPECE';
  //
  //
  // }

  calculmax(i: number):number{
   let present = false;
    for (let j = 0; j < this.paiement.length; j++) {
      if (this.paiement.at(j).get('modePaiement')?.value =='REMBOURSSEMENT' && j!=i){
        present = true;
      }
    }
    if (present){
      let compte = this.paiement.at(i).get('comptePayeur')?.value as CompteClientDto;
      return (compte.solde as number - this.paiement.at(i).get('montant')?.value) as number
    }
    if (this.paiement.at(i).get('modePaiement')?.value =='REMBOURSSEMENT'){
      let compte = this.paiement.at(i).get('comptePayeur')?.value as CompteClientDto
      return compte.solde as number
    }

    return 100000000000;
  }
}
