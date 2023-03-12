import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-service-detail-dialog',
  templateUrl: './service-detail-dialog.component.html',
  styleUrls: ['./service-detail-dialog.component.scss']
})
export class ServiceDetailDialogComponent {

  constructor(private dialogRef: MatDialogRef<ServiceDetailDialogComponent>) {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
