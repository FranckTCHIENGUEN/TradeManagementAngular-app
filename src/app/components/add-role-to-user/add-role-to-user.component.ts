import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {AppRoleService} from "../../../services/roleService/app-role.service";
import {RoleDto} from "../../../tm-api/src-api/models/role-dto";
import {MatSelectionList} from "@angular/material/list";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";

@Component({
    selector: 'app-add-role-to-user',
    templateUrl: './add-role-to-user.component.html',
    styleUrls: ['./add-role-to-user.component.scss'],
    standalone: false
})
export class AddRoleToUserComponent {
  private person: UtilisateurDto;
  listRole: Array<RoleDto> = new Array<RoleDto>();
  listSelectedRole: Array<RoleDto> = new  Array<RoleDto>();

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
               private dialog: MatDialog,
               private dialogRef: MatDialogRef<AddRoleToUserComponent>,
               private roleService:AppRoleService,
               private userService:AppUserService) {

    this.person = data.person ;
    this.roleService.findAll().subscribe(value => {
      value.forEach(value1 => {
        let present = false;
        this.person.roles?.forEach(value2 => {

          if (value1.id == value2.id){

            present = true;
          }
        })
        if (!present){
          this.listRole?.push(value1)
        }
      })
    })

  }
  closeDialog(p: { etat: string }) {
    this.dialogRef.close();
  }
  formSubmit() {
    console.log(this.listSelectedRole)
    this.listSelectedRole?.forEach(value => {
      this.userService.addRoleToUser(this.person.id as number, value.id as number).subscribe(
        value1 => {
          this.closeDialog({etat :'ok'});
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "Role "+ value.roleName + " ajouter avec succé",
            },
          });
        }
      )
    })

  }

  updateSelectedRole(selected: MatSelectionList) {
    this.listSelectedRole = new Array<RoleDto>();
    selected.selectedOptions.selected.forEach(value => {
      this.listSelectedRole.push(value.value as RoleDto)
    })

  }
}
