import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {ChangePasswordDialogComponent} from "../change-password-dialog/change-password-dialog.component";
import {ConfirmDeleteDialogComponent} from "../confirm-delete-dialog/confirm-delete-dialog.component";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {FormControl} from "@angular/forms";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {RoleDto} from "../../../tm-api/src-api/models/role-dto";
import {Permissions} from "../../../tm-api/src-api/models/permissions";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-person-view-detail',
  templateUrl: './person-view-detail.component.html',
  styleUrls: ['./person-view-detail.component.scss']
})
export class PersonViewDetailComponent implements OnInit{
  person: any;
  typePersonne: any;
  toggleControl = new FormControl(false);
  listRoles?: Array<RoleDto> =[] ;
  listPermission: Array<Permissions> | undefined = [];
  permission: Array<string> = [];

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
               private dialog: MatDialog,
               private userService:AppUserService) {

    this.typePersonne = data.typePersonne;
    this.person = data.person;
    if (this.typePersonne == 'utilisateur'){
     this.toggleControl.patchValue(!this.person.accountNonLocked);
     let user = this.person as UtilisateurDto;
     this.listRoles=user.roles
    }
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

  updatePermission(role: RoleDto) {
    this.listPermission = role.permissions
  }

  openDialogPass() {
    this.dialog.open(ChangePasswordDialogComponent, {
      height: '90%',
      width: '30%',
      disableClose:false,
    });
  }

  openDialogEdit(person: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    dialogConfig.data= {
      typePersonne:this.typePersonne,
      person: person,
    };

    this.dialog.open(SavePersonDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SavePersonDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.userService.findByEmail(person.email).subscribe(value => {
            this.person = value
          })
        }
      }
    );
    dialogRef.close();

  }

  ngOnInit(): void {

    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.dialog.open(ConfirmDeleteDialogComponent, {
        disableClose:false,
        data: {
          message: "etes vous sur de vouloir changer de l'utilisateur ?",
          titre: "Changer statut",
        },
      }).afterClosed().subscribe(value => {
        if (value=='oui'){

          let user = this.person as UtilisateurDto;
          user.accountNonLocked = this.toggleControl.value as boolean

          this.userService.save(user).subscribe(value1 => {

            this.person = value;
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message:"Statut modifié avec succé",
              },
            });
          })
        }
      });
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

  openDialogRenewPass() {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      disableClose:false,
      data: {
        message: "etes vous sur de vouloir reinitialiser le mot de passe de l'utilisateur ?",
        titre: "reinitialiser le mot de passe",
      },
    }).afterClosed().subscribe(value => {
      if (value=='oui'){
        this.userService.renewPass(this.person).subscribe(value1 => {

          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message:"Mot de passe réinitialiser avec succé",
            },
          });
        })
      }
    });
  }

  menuTopLeftPosition =  {x: '0', y: '0'}

  // reference to the MatMenuTrigger in the DOM
  @ViewChild(MatMenuTrigger, {static: true}) matMenuTrigger: MatMenuTrigger | undefined;

  /**
   * Method called when the user click with the right button
   * @param event MouseEvent, it contains the coordinates
   * @param item Our data contained in the row of the table
   */
  onRightClick(event: MouseEvent, item: any) {
    // preventDefault avoids to show the visualization of the right-click menu of the browser
    event.preventDefault();

    // we record the mouse position in our object
    this.menuTopLeftPosition.x = event.clientX + 'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';

    // we open the menu
    // we pass to the menu the information about our object
    this.matMenuTrigger!.menuData = {item: item}

    // we open the menu
    this.matMenuTrigger?.openMenu();

  }

  openDialogAdd() {

  }

  openDialogRemoveRole(role: RoleDto, id:number) {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      disableClose:false,
      data: {
        message: "Retirer le role" +role.roleName+ "à l'utilisateur ?",
        titre: "Gestion de role",
      },
    }).afterClosed().subscribe(value => {
      if (value=='oui'){
        this.userService.removeRoleToUser(id, role.id as number).subscribe(value1 => {

          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message:"Role retirer avec succé",
            },
          });
        })
      }
    });
  }
}
