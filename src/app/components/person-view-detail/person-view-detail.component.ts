import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {ChangePasswordDialogComponent} from "../change-password-dialog/change-password-dialog.component";

@Component({
  selector: 'app-person-view-detail',
  templateUrl: './person-view-detail.component.html',
  styleUrls: ['./person-view-detail.component.scss']
})
export class PersonViewDetailComponent {
  person: any;
  typePersonne: any;

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
               private dialog: MatDialog,) {

    this.typePersonne = data.typePersonne;
    this.person = data.person;
  }

  openDialogPass() {
    this.dialog.open(ChangePasswordDialogComponent, {
      height: '90%',
      width: '30%',
      disableClose:false,
    });
  }

  samePerson():boolean {

    if (this.typePersonne == 'utilisateur'){
      let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
      if (this.person.id ==utilisateurDto.id){
        return true;
      }
    }

    return false;
  }
}
