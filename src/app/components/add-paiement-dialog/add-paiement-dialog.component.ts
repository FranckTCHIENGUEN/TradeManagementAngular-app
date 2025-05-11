import {Component, Inject} from '@angular/core';
import {ClientDto} from "../../../tm-api/src-api/models/client-dto";
import {CompteClientDto} from "../../../tm-api/src-api/models/compte-client-dto";
import {map, Observable} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ClientAppServiceService} from "../../../services/clientAppService/client-app-service.service";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {PaiementDto} from "../../../tm-api/src-api/models/paiement-dto";
import {AppPaiementServiceService} from "../../../services/paiementService/app-paiement-service.service";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-add-paiement-dialog',
  templateUrl: './add-paiement-dialog.component.html',
  styleUrls: ['./add-paiement-dialog.component.scss']
})
export class AddPaiementDialogComponent {

  modeVisible = true
  saveForm= this.formBuilder.group({
    objet: ['', ],
    comptePayeur: ['', ],
    resteAPayer:[0,[

    ]],
    resteAdonner:[0,[

    ]],
    modePaiement:['',[
      Validators.required
    ]],
    montant: [0, Validators.required],
  });
  private _type?: string;
  private donnees: any;
  detectrequired = 'false';
  filteredOptions: Observable<ClientDto[]> | undefined;
  filteredElement: Observable<ArticleDto[]> | undefined;

  constructor(private formBuilder:FormBuilder,
              private paiementService:AppPaiementServiceService,
              private clientService:ClientAppServiceService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    if (this.data !=null){
      this._type = this.data.type;
      this.donnees = this.data.commande;
    }
    if (this._type=="commande fournisseur"){
      this.modeVisible=false;
    }

  }
  displayFnPaiement(user: CompteClientDto): string {
    let nom = user.numeroCompte
    return user && nom ? nom : '';
  }
  calculmax(){
    if (this.saveForm.controls.modePaiement?.value =='REMBOURSSEMENT'){
      let compte = this.saveForm.controls.comptePayeur?.value as CompteClientDto
      return compte.solde as number
    }

    // this.detectRequired();
    return 100000000000;
  }
  manageChangeFilterPaiement(){

    this.filteredElement = this._filter(this.saveForm.controls.comptePayeur.value as string);
  }

  detectRequired() {

    if (this.saveForm.controls.modePaiement.value == 'ESPECE'){
      this.detectrequired = 'false';
    }
    else {
      this.detectrequired = 'true';
    }

  }
  private _filter(name: string): Observable<ClientDto[]> {
    // const filterValue = name.toLowerCase();

    return this.clientService.findAll().pipe(map(response => response.filter(option => {
      return option.nom?.toLowerCase().indexOf(name.toLowerCase()) === 0
    })))
  }
  // private _filterFournisseur(name: string): Observable<FournisseurDto[]> {
  //   // const filterValue = name.toLowerCase();
  //
  //   return this.fournisseurService.findAll().pipe(map(response => response.filter(option => {
  //     return option.nom?.toLowerCase().indexOf(name.toLowerCase()) === 0
  //   })))
  // }

  formSubmit() {
    if (!this.saveForm.valid) {


    }
    else {
      let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData')as string)
      let paieEle:Array<PaiementDto> = [];

        let compte:string | undefined;
        let objet:any;
        let resteApayer = this.donnees.resteAPayer - (this.saveForm.controls.montant.value as number)
      let resteAdonner:number = 0;

        if (resteApayer <0){
          resteAdonner = resteApayer * (-1);
          resteApayer = 0;
        }

        if (this.saveForm.controls.modePaiement.value =='REMBOURSSEMENT'){
          let numero: CompteClientDto = this.saveForm.controls.comptePayeur?.value as CompteClientDto;

          compte = numero.numeroCompte;
        }
        else {
          compte = this.saveForm.controls.comptePayeur.value as string
        }

        if (this._type=="commande client"){

          if(new Date(this.donnees.datecommande).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)){
            objet = "CC_OLD"
          }else{
            objet = "CC"
          }

        }
        else if (this._type=="commande fournisseur"){
          if(new Date(this.donnees.datecommande).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)){
            objet = "CF_OLD"
          }else{
            objet = "CF"
          }
        }

        const pai:PaiementDto = {
          idEntreprise:userConnected.entreprise?.id,
          montant : this.saveForm.controls.montant.value as number,
          mode : this.saveForm.controls.modePaiement.value as "REMBOURSSEMENT" | "ESPECE" | "MOBILE_MONNEY" | "ORANGE_MONNEY",
          objet : objet,
          idObjet:this.donnees.id,
          datepaiement:new Date().toISOString(),
          resteApayer:resteApayer,
          resteAdonner: resteAdonner,
          comptePayeur : compte
        };

        paieEle.push(pai);

        this.paiementService.saveAll(paieEle).subscribe(value => {
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message:  "paiement enregisgré avec succé",
            },
          });
          this.saveForm.reset();
        })

    }
  }
}
