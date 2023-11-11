import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {SaveProductDialogComponent} from "../save-product-dialog/save-product-dialog.component";
import {AppProductService} from "../../../services/productService/app-product.service";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent implements OnInit{

  produit:ArticleDto = {}
  permission: Array<string> = [];

  constructor(private produitService:AppProductService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any,
                     private dialogRef: MatDialogRef<ProductDetailDialogComponent>) {
    this.getPermissions();
    this.produit = this.data.data;
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

  openDialogEdit(produit: ArticleDto) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    dialogConfig.data= produit;

    this.dialog.open(SaveProductDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SaveProductDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.produitService.findById(this.produit.id as number).subscribe(
            value => {
              this.produit = value;
            }
          )
        }
      }
    );
    dialogRef.close();

  }

  ngOnInit(): void {
  }
}
