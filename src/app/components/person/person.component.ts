import { Component } from '@angular/core';
import {ListViewDetailDialogComponent} from "../list-view-detail-dialog/list-view-detail-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  typesOfShoes: any;

  constructor(private dialog: MatDialog) {
  }
  openDialogSave() {
    this.dialog.open(SavePersonDialogComponent, {
      height: '75%',
      width: '90%',
      disableClose:false,
      data: {

      },
    });
  }

  openDialogView(data: any) {
    this.dialog.open(ListViewDetailDialogComponent, {
      height: '90%',
      width: '90%',
      disableClose:false,
      data: {
        data: data,
      },
    });
  }
}
