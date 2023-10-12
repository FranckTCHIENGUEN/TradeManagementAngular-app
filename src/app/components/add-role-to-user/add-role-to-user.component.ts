import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {AppRoleService} from "../../../services/roleService/app-role.service";
import {RoleDto} from "../../../tm-api/src-api/models/role-dto";
import {MatListOption} from "@angular/material/list";
import {Permissions} from "../../../tm-api/src-api/models/permissions";
import {MatLegacyListOption} from "@angular/material/legacy-list";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-add-role-to-user',
  templateUrl: './add-role-to-user.component.html',
  styleUrls: ['./add-role-to-user.component.scss']
})
export class AddRoleToUserComponent {
  private person: number;
  listRole: Array<RoleDto> | undefined;
  listSelectedRole: Array<RoleDto> | undefined;

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
               private dialog: MatDialog,
               private dialogRef: MatDialogRef<AddRoleToUserComponent>,
               private roleService:AppRoleService,
               private userService:AppUserService) {

    this.roleService.findAll().subscribe(value => {
      this.listRole = value;
    })
    this.person = data.person ;
  }
  closeDialog(p: { etat: string }) {
    this.dialogRef.close();
  }
  formSubmit() {
    this.listSelectedRole?.forEach(value => {
      this.userService.addRoleToUser(this.person, value.id as number).subscribe(
        value1 => {
          this.closeDialog({etat :'ok'});
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "Role"+ value.roleName + " ajouter avec succé",
            },
          });
        }
      )
    })

  }

  updateSelectedPermissions(selected: MatListOption[]) {
    this.listSelectedRole = selected as Array<RoleDto>;
  }
}
