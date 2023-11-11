import {Component, Inject} from '@angular/core';
import {EntrepriseDto} from "../../../tm-api/src-api/models/entreprise-dto";
import {AppProductService} from "../../../services/productService/app-product.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-viewenterprise-dialog',
  templateUrl: './viewenterprise-dialog.component.html',
  styleUrls: ['./viewenterprise-dialog.component.scss']
})
export class ViewenterpriseDialogComponent {
  entreprise: EntrepriseDto = {};

  constructor(private produitService:AppProductService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<ViewenterpriseDialogComponent>) {

    this.entreprise = this.data.donnee;
  }

  // openDialogEdit(entreprise: any) {
  //   const dialogConfig = new MatDialogConfig();
  //
  //   dialogConfig.disableClose = false;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.height = '75%';
  //   dialogConfig.width = '90%';
  //
  //   dialogConfig.data= entreprise;
  //
  //   this.dialog.open(SaveProductDialogComponent, dialogConfig);
  //
  //   const dialogRef = this.dialog.open(SaveProductDialogComponent, dialogConfig);
  //
  //   dialogRef.afterClosed().subscribe(
  //     data => {
  //       if (data=="ok"){
  //
  //         this.produitService.findById(this.produit.id as number).subscribe(
  //           value => {
  //             this.produit = value;
  //           }
  //         )
  //       }
  //     }
  //   );
  //   dialogRef.close();
  // }
}
