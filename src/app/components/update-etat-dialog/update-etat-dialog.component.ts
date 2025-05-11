import {Component, Inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {
  AppCommandFournisseurService
} from "../../../services/commandFournisseurService/app-command-fournisseur.service";
import {AppCommandClientService} from "../../../services/commandClientService/app-command-client.service";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-update-etat-dialog',
  templateUrl: './update-etat-dialog.component.html',
  styleUrls: ['./update-etat-dialog.component.scss']
})
export class UpdateEtatDialogComponent {
  saveForm = this.formBuilder.group({
    etatCommande:['',[

    ]],
  })

  etatCommande = ['EN_PREPARATION' , 'RECEPTIONNER' , 'VALIDER' , 'LIVRER']
  type?: string;
  donnees:any;

  constructor(private formBuilder:FormBuilder,
              private dataLinkTransfert:DataLinkTransfertService,
              private comFournisseurService:AppCommandFournisseurService,
              private comClientService:AppCommandClientService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<UpdateEtatDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    if (this.data !=null){
      this.type = this.data.type;
      this.donnees = this.data.Commande;
    }

  }

  formSubmit() {
    if (this.saveForm.valid){
      this.donnees.etatCommande = this.saveForm.controls.etatCommande.value;

      if (this.type =='commande client'){
        this.comClientService.save(this.donnees).subscribe(
          value => {
            this.closeDialog({etat :'ok'});
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message:"Etat commande modifié avec succé",
              },
            });
          }
        )
      }
      if (this.type =='commande fournisseur'){
        this.comFournisseurService.save(this.donnees).subscribe(
          value => {
            this.closeDialog({etat :'ok'});
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message:"Etat commande modifié avec succé",
              },
            });
          }
        )
      }
    }
  }

  private closeDialog(param: { etat: string }) {
      this.dialogRef.close(param);
  }
}
