import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {AppCategorieProduitService} from "../../../services/categorieProduit/app-categorie-produit.service";
import {SaveProductDialogComponent} from "../save-product-dialog/save-product-dialog.component";
import {AddCategorieDialogComponent} from "../add-categorie-dialog/add-categorie-dialog.component";
import {ConfirmDeleteDialogComponent} from "../confirm-delete-dialog/confirm-delete-dialog.component";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {AppCatergorieServiceService} from "../../../services/categoriService/app-catergorie-service.service";
import {AppCategorieDepenseService} from "../../../services/categorieDepenseService/app-categorie-depense.service";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";

@Component({
    selector: 'app-view-cat-dialog',
    templateUrl: './view-cat-dialog.component.html',
    styleUrls: ['./view-cat-dialog.component.scss'],
    standalone: false
})
export class ViewCatDialogComponent implements OnInit{

  categories: Array<any> =[];
  typeAffichage?: string;
  permission: Array<string> = [];

  constructor(private catProduitService:AppCategorieProduitService,
              private catServiceService:AppCatergorieServiceService,
              private catDepenseService:AppCategorieDepenseService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<SaveProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    if (this.data!=null){
      this.typeAffichage=this.data.type
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

  ngOnInit(): void {

    this.findAllCatProduit();
  }

  nouvelleCategorie() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    if (this.typeAffichage=="produit"){
      dialogConfig.data= {
        typecat:"produit"
      };
    }
    if (this.typeAffichage=="service"){
      dialogConfig.data= {
        typecat:"service"
      };
    }
    if (this.typeAffichage=="depense"){
      dialogConfig.data= {
        typecat:"depense"
      };
    }

    this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.categories.push(data.data)
        }
      }
    );
    dialogRef.close();
  }

  openDialogEditCat(cat: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '25%';
    dialogConfig.width = '50%';

    if (this.typeAffichage=="produit"){
      dialogConfig.data= {
        typecat:"produit",
        categorie:cat
      };
    }
    if (this.typeAffichage=="service"){
      dialogConfig.data= {
        typecat:"service",
        categorie:cat
      };
    }
    if (this.typeAffichage=="depense"){
      dialogConfig.data= {
        typecat:"depense",
        categorie:cat
      };
    }

    this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAllCatProduit()
        }
      }
    );
    dialogRef.close();
  }

  findAllCatProduit(){

    if (this.typeAffichage=="produit"){
      this.catProduitService.findAll().subscribe(
        value => {
          this.categories = value;
        }
      );
    }
    if (this.typeAffichage=="service"){
      this.catServiceService.findAll().subscribe(
        value => {
          this.categories = value;
        }
      );
    }
    if (this.typeAffichage=="depense"){
      this.catDepenseService.findAll().subscribe(
        value => {
          this.categories = value;
        }
      );
    }
  }

  openDialogDeleteCat(cat: any) {

    this.dialog.open(ConfirmDeleteDialogComponent, {
      disableClose:false,
    }).afterClosed().subscribe(value => {
      if (value=='oui'){
        this.catProduitService.delete(cat.id).subscribe(value1 => {
          this.ngOnInit()
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "categorie produit" + " supprimé avec succé",
            },
          });
        })
      }
    });
  }

  deleteSelected() {

  }
}
