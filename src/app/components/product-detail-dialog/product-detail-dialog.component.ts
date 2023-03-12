import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent {

  constructor(private dialogRef: MatDialogRef<ProductDetailDialogComponent>) {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
