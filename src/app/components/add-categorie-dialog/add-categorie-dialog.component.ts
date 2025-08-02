import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {AppCategorieProduitService} from "../../../services/categorieProduit/app-categorie-produit.service";
import {AppCategorieDepenseService} from "../../../services/categorieDepenseService/app-categorie-depense.service";
import {AppCatergorieServiceService} from "../../../services/categoriService/app-catergorie-service.service";
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";

@Component({
    selector: 'app-add-categorie-dialog',
    templateUrl: './add-categorie-dialog.component.html',
    styleUrls: ['./add-categorie-dialog.component.scss'],
    standalone: false
})
export class AddCategorieDialogComponent {

  categorie:any={};
  private _typeCat:string=''
  private _matcher = new MyErrorStateMatcher();

  saveForm = this.formBuilder.group({
    nom:[this.categorie.nom,[
      Validators.required
    ]],
  })

  constructor(private formBuilder:FormBuilder,
              private catProduitService:AppCategorieProduitService,
              private catDepenseService:AppCategorieDepenseService,
              private catServiceService:AppCatergorieServiceService,
              private dataLinkTransfert:DataLinkTransfertService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<AddCategorieDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    this._typeCat = data.typecat;
    if (data.categorie !=null){
      this.categorie = data.categorie
      this.saveForm.patchValue(this.categorie)
    }
  }


  get matcher(): MyErrorStateMatcher {
    return this._matcher;
  }

  get typeCat(): string {
    return this._typeCat;
  }

  closeDialog(p: { etat:String, data:any }) {
    this.dialogRef.close(p);
  }

  formSubmit() {
    if (this.saveForm.valid){
      let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);
      this.categorie.idEntreprise = userConnected.entreprise?.id;
      this.categorie.nom = this.saveForm.value.nom as string;

      if (this.typeCat == 'depense'){
        this.catDepenseService.save(this.categorie)
          .subscribe(value => {

            this.closeDialog({etat:"ok", data:value});
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: "Categorie "+ this.typeCat + " enregisgré avec succé",
              },
            });
          })
      }

      else if (this.typeCat == 'service'){
        this.catServiceService.save(this.categorie)
          .subscribe(value => {

            this.closeDialog({etat:"ok", data:value});
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message:"Categorie"+ this.typeCat + " enregisgré avec succé",
              },
            });
          })
      }

      else if (this.typeCat == 'produit'){
        this.catProduitService.save(this.categorie)
          .subscribe(value => {

            this.closeDialog({etat:"ok", data:value});
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message:"Categorie"+ this.typeCat + " enregisgré avec succé",
              },
            });
          })
      }
    }

  }
}
