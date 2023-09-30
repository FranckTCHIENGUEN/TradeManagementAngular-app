import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {PaiementDto} from "../../../tm-api/src-api/models/paiement-dto";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AppVenbteServiceService} from "../../../services/venteService/app-venbte-service.service";
import {
  AppCommandFournisseurService
} from "../../../services/commandFournisseurService/app-command-fournisseur.service";
import {AppPaiementServiceService} from "../../../services/paiementService/app-paiement-service.service";
import {AppCommandClientService} from "../../../services/commandClientService/app-command-client.service";
import {Column} from "../list-view/list-view.component";


@Component({
  selector: 'app-facture-dialog',
  templateUrl: './facture-dialog.component.html',
  styleUrls: ['./facture-dialog.component.scss']
})
export class FactureDialogComponent {
  donnees: any;
  type?: string;
  id:number = 0;
  elements: any;
  paiementList?: Array<PaiementDto>;
  date = new Date().toISOString();

  @ViewChild('printSection', { static: false }) pdfTable?: ElementRef;

  columns:Array<Column> = [

    {
      columnDef: 'designation',
      header: 'Designation',
      cell: (element: any) =>{
        if (element.type=='PRODUIT'){
          return element.object.designation;
        }
        else if (element.type=='SERVICE'){
          return element.object.serviceDto?.nom;
        }
      }
    },
    {
      columnDef: 'quantité',
      header: 'Qté',
      cell: (element: any) =>{
        return element.quantite;
      }
    },
    {
      columnDef: 'prix unitaire',
      header: 'Prix unitaire',
      cell: (element: any) =>{
        return element.prixunitaire ;
      }
    },
    {
      columnDef: 'prix total',
      header: 'Prix total',
      cell: (element: any) => `${element.prixTotal}`,
    },
  ];

  constructor(private dialogRef: MatDialogRef<FactureDialogComponent>,
              private venteService:AppVenbteServiceService,
              private comFournisseurService:AppCommandFournisseurService,
              private paiementService:AppPaiementServiceService,
              private comClientService:AppCommandClientService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    if (this.data!=null){
      this.id = this.data.donnees as number;
      this.type = this.data.type;
      this.findAll();

      if (this.type=='vente'){
        this.venteService.findLigneVente(this.donnees.id).subscribe(
          value => {
            this.elements = value;
          }
        )
        this.paiementService.findByObjetAndIdObjet("VENTE",this.donnees.id).subscribe(
          value => {
            this.paiementList = value;
          }
        );
      }
      if (this.type=='commande client'){
        this.comClientService.findLigneCommande(this.donnees.id).subscribe(
          value => {
            this.elements = value;
          }
        )
        this.paiementService.findByObjetAndIdObjet('CC',this.donnees.id).subscribe(
          value => {
            this.paiementList = value;
          }
        );
      }
      if (this.type=='commande fournisseur'){
        this.comFournisseurService.findLigneCommande(this.donnees.id).subscribe(
          value => {
            this.elements = value;
          }
        );
        this.paiementService.findByObjetAndIdObjet('VENTE',this.donnees.id).subscribe(
          value => {
            this.paiementList = value;
          }
        );
      }

    }
  }
  closeDialog() {
    this.dialogRef.close();
  }

  private findAll() {
    if (this.type =='commande client'){
      this.comClientService.findById(this.id).subscribe(
        value => {
          this.donnees=value;
        }
      )
    }
    if (this.type =='commande fournisseur'){
      this.comFournisseurService.findById(this.id).subscribe(
        value => {
          this.donnees=value;
        }
      )
    }
    if (this.type =='vente'){
      this.venteService.findById(this.id).subscribe(
        value => {
          this.donnees=value;
        }
      )
    }
  }

  print() {

  }

  download() {

  }
}
