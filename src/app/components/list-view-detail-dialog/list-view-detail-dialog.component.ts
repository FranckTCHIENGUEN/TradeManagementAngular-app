import {Component, Input} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-list-view-detail-dialog',
  templateUrl: './list-view-detail-dialog.component.html',
  styleUrls: ['./list-view-detail-dialog.component.scss']
})
export class ListViewDetailDialogComponent {
 @Input() numeroDetail: any;

  constructor(private dialogRef: MatDialogRef<ListViewDetailDialogComponent>) {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
