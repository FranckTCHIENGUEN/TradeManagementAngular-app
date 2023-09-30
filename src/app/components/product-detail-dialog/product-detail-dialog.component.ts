import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {SaveProductDialogComponent} from "../save-product-dialog/save-product-dialog.component";
import {AppProductService} from "../../../services/productService/app-product.service";

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent implements OnInit{

  produit:ArticleDto = {}

  constructor(private produitService:AppProductService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<ProductDetailDialogComponent>) {

    this.produit = this.data.data;
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
