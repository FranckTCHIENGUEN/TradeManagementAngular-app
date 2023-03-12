import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-save-product-dialog',
  templateUrl: './save-product-dialog.component.html',
  styleUrls: ['./save-product-dialog.component.scss']
})
export class SaveProductDialogComponent {

  private _saveForm = this.formBuilder.group({
    nom:['',[
      Validators.required
    ]],
    prix:['',[
      Validators.required
    ]],
    categorie:['',[
      Validators.required
    ]],
    quantite:['',[
      Validators.required
    ]],
    photo:['',],
  })
  constructor(private formBuilder:FormBuilder, private dialogRef: MatDialogRef<SaveProductDialogComponent>) {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
