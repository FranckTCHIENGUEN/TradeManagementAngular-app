import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SavePersonDialogComponent} from "../../../components/save-person-dialog/save-person-dialog.component";
import {SaveProductDialogComponent} from "../../../components/save-product-dialog/save-product-dialog.component";

@Component({
  selector: 'app-produit-page',
  templateUrl: './produit-page.component.html',
  styleUrls: ['./produit-page.component.scss']
})
export class ProduitPageComponent {
  constructor(private dialog: MatDialog) {
  }
  openDialogSave() {
    this.dialog.open(SaveProductDialogComponent, {
      height: '75%',
      width: '90%',
      disableClose:false,
      data: {

      },
    });
  }
}
