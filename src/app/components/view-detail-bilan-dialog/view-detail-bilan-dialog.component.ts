import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Column} from "../list-view/list-view.component";
import {DetailsBilan} from "../../../tm-api/src-api/models/details-bilan";

@Component({
  selector: 'app-view-detail-bilan-dialog',
  templateUrl: './view-detail-bilan-dialog.component.html',
  styleUrls: ['./view-detail-bilan-dialog.component.scss']
})
export class ViewDetailBilanDialogComponent {
  donnees: any;
  date?: string;

  columns:Array<Column> = [
    {
      columnDef: 'objet',
      header: 'Objet',
      cell: (element: DetailsBilan) => `${element.objetBilan}`,
    },
    {
      columnDef: 'CA',
      header: 'CA',
      cell: (element: DetailsBilan) =>{
        return element.ca
      }
    },
    {
      columnDef: 'nombre',
      header: 'Solicitation',
      cell: (element: DetailsBilan) => `${element.nombre}`,
    },
    {
      columnDef: 'avance',
      header: 'Avance',
      cell: (element: DetailsBilan) => `${element.avance}`,
    },
    {
      columnDef: 'Rembourssement',
      header: 'Rembourssement',
      cell: (element: DetailsBilan) => `${element.rembourssement}`,
    },
    {
      columnDef: 'Reste a payer',
      header: 'Reste a payer',
      cell: (element: DetailsBilan) => `${element.resteApayer}`,
    },
  ];

  constructor(private dialogRef: MatDialogRef<ViewDetailBilanDialogComponent>,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    if (this.data!=null){
      this.donnees = this.data.donnees;
      this.date = this.data.date;

    }
  }
  closeDialog() {
    this.dialogRef.close();
  }

}
