import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {AppVenbteServiceService} from "../../../services/venteService/app-venbte-service.service";
import {
  AppCommandFournisseurService
} from "../../../services/commandFournisseurService/app-command-fournisseur.service";
import {AppCommandClientService} from "../../../services/commandClientService/app-command-client.service";
import {AddPaiementDialogComponent} from "../add-paiement-dialog/add-paiement-dialog.component";
import {AddLigneCommandeComponent} from "../add-ligne-commande/add-ligne-commande.component";
import {UpdateEtatDialogComponent} from "../update-etat-dialog/update-etat-dialog.component";
import {PaiementDto} from "../../../tm-api/src-api/models/paiement-dto";
import {AppPaiementServiceService} from "../../../services/paiementService/app-paiement-service.service";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {FactureDialogComponent} from "../facture-dialog/facture-dialog.component";
import {FactureService} from "../../../services/factureService/facture.service";
import {inputNames} from "@angular/cdk/schematics";

@Component({
  selector: 'app-list-view-detail-dialog',
  templateUrl: './list-view-detail-dialog.component.html',
  styleUrls: ['./list-view-detail-dialog.component.scss']
})
export class ListViewDetailDialogComponent implements OnInit{
  @Input() donnees: any;
  @Input() type?: string;
  elements: any;

  paiementList?: Array<PaiementDto>;
  permission: Array<string> = [];

  constructor(private dialogRef: MatDialogRef<ListViewDetailDialogComponent>,
              private venteService:AppVenbteServiceService,
              private factureService: FactureService,
              private comFournisseurService:AppCommandFournisseurService,
              private paiementService:AppPaiementServiceService,
              private comClientService:AppCommandClientService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    this.getPermissions();
    if (this.data!=null){
      this.donnees = this.data.donnees;
      this.type = this.data.type;
      this.initializeOperation()

    }

  }

  ngOnInit() {
    if (this.donnees && this.type){
      this.initializeOperation();
    }
  }

  private initializeOperation(){

    if (this.type=='vente'){
      this.venteService.findLigneVente(this.donnees.id).subscribe(
        value => {
          this.elements = value;
        }
      )
      if (this.permission.includes('PAIEMENT: LIRE')){
        this.paiementService.findByObjetAndIdObjet("VENTE",this.donnees.id).subscribe(
          value => {
            this.paiementList = value;
          }
        );
      }

    }
    if (this.type=='commande client'){
      this.comClientService.findLigneCommande(this.donnees.id).subscribe(
        value => {
          this.elements = value;
        }
      )
      if (this.permission.includes('PAIEMENT: LIRE')){
        this.paiementService.findByObjetAndIdObjet('CC',this.donnees.id).subscribe(
          value => {
            this.paiementList = value;
          }
        );
      }

    }
    if (this.type=='commande fournisseur'){
      this.comFournisseurService.findLigneCommande(this.donnees.id).subscribe(
        value => {
          this.elements = value;
        }
      );
      if (this.permission.includes('PAIEMENT: LIRE')){
        this.paiementService.findByObjetAndIdObjet('VENTE',this.donnees.id).subscribe(
          value => {
            this.paiementList = value;
          }
        );
      }

    }
  }

  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }
  closeDialog() {
    this.dialogRef.close();
  }

  openDialogAddPaiement() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    dialogConfig.data= {
      type:this.type,
      commande:this.donnees
    };

    this.dialog.open(AddPaiementDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(AddPaiementDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();
  }
  viewFacture(id: any) {
    if (this.type =="commande client" ||
      this.type == "commande fournisseur" || this.type=="vente"){
      this.dialog.open(FactureDialogComponent, {
        height: '1122px',
        width: '793px',
        disableClose:false,
        data: {
          donnees: id,
          type: this.type,
        },
      });
    }
  }
  openDialogAddLigne(element?:any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';


    dialogConfig.data= {
      type:this.type,
      idCommande:this.donnees.id
    };

    this.dialog.open(AddLigneCommandeComponent, dialogConfig);

    const dialogRef = this.dialog.open(AddLigneCommandeComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();
  }

  loadFacture(id: number) {
    this.factureService.downloadFacture(id).subscribe(response => {
      // this.pdfBlob = response;
      // this.pdfUrl = URL.createObjectURL(response);
      // const file = new Blob([response], { type: 'application/pdf' });
      // const fileURL = URL.createObjectURL(file);
      // this.pdfUrl = fileURL;
    });
  }

  openDialogUpdateEtat() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';
    dialogConfig.data= {
      type:this.type,
      Commande:this.donnees
    };

    this.dialog.open(UpdateEtatDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(UpdateEtatDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();
  }

  private findAll() {
    if (this.type =='commande client'){
      this.comClientService.findById(this.donnees.id).subscribe(
        value => {
          this.donnees=value;
        }
      )
    }
    if (this.type =='commande fournisseur'){
      this.comFournisseurService.findById(this.donnees.id).subscribe(
        value => {
          this.donnees=value;
        }
      )
    }
  }
}
