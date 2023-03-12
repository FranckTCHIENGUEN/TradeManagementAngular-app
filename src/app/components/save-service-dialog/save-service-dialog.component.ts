import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-save-service-dialog',
  templateUrl: './save-service-dialog.component.html',
  styleUrls: ['./save-service-dialog.component.scss']
})
export class SaveServiceDialogComponent {

  private _saveForm = this.formBuilder.group({
    nom:['',[
      Validators.required
    ]],
    ville:['',[
      Validators.required
    ]],
    quartier:[''],
    mail:[''],
  })
  constructor(private formBuilder:FormBuilder, private dialogRef: MatDialogRef<SaveServiceDialogComponent>) {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
