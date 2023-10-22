import { Component } from '@angular/core';
import {AppRoleService} from "../../../services/roleService/app-role.service";
import {RoleDto} from "../../../tm-api/src-api/models/role-dto";
import {Permissions} from "../../../tm-api/src-api/models/permissions";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {SaveRoleDialogComponent} from "../save-role-dialog/save-role-dialog.component";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-compo-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  listRoles: Array<RoleDto> =[] ;
  listPermission: Array<Permissions> | undefined = [];
  permission: Array<string> = [];

  constructor(private roleService:AppRoleService,
              private dialog: MatDialog,) {
   this.findAll();
    this.getPermissions();
  }

  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }

  findAll(){
    this.roleService.findAll().subscribe(value => {
      this.listRoles = value;
    })
  }

  openDialogSave() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    this.dialog.open(SaveRoleDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SaveRoleDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();
  }

  openDialogEdit(role: RoleDto) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '90%';
    dialogConfig.width = '90%';

    dialogConfig.data= {
      role: role,
    };

    this.dialog.open(SaveRoleDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SaveRoleDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();

  }

  updatePermission(role: RoleDto) {
    this.listPermission = role.permissions
  }
}
