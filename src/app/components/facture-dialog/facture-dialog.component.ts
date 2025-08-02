import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AppVenbteServiceService} from "../../../services/venteService/app-venbte-service.service";
import {
  AppCommandFournisseurService
} from "../../../services/commandFournisseurService/app-command-fournisseur.service";
import {AppCommandClientService} from "../../../services/commandClientService/app-command-client.service";
import {FactureService} from "../../../services/factureService/facture.service";


@Component({
    selector: 'app-facture-dialog',
    templateUrl: './facture-dialog.component.html',
    styleUrls: ['./facture-dialog.component.scss'],
    standalone: false
})
export class FactureDialogComponent {
  donnees: any;
  type?: string;
  id:number = 0;
  elements: any;

  pdfUrl: any; // URL du PDF à afficher
  pdfBlob!: Blob;
  constructor(private dialogRef: MatDialogRef<FactureDialogComponent>,
              private venteService:AppVenbteServiceService,
              private comFournisseurService:AppCommandFournisseurService,
              private comClientService:AppCommandClientService,
              private factureService: FactureService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    if (this.data!=null){
      this.id = this.data.donnees as number;
      this.type = this.data.type;
      this.loadFacture(this.id)

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

  loadFacture(id: number) {
    this.factureService.downloadFacture(id).subscribe(response => {
      this.pdfBlob = response;
      this.pdfUrl = URL.createObjectURL(response);
      // const file = new Blob([response], { type: 'application/pdf' });
      // const fileURL = URL.createObjectURL(file);
      // this.pdfUrl = fileURL;
    });
  }

  // Télécharger le PDF
  downloadPdf() {

    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = 'facture.pdf';
    link.click();
  }

  // Imprimer le PDF
  printPdf() {
    const printWindow = window.open(this.pdfUrl, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow?.print();
      };
    }
  }
}
