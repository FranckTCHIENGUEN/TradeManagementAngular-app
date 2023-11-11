import {Component, Inject, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
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
import {AddRoleToUserComponent} from "../add-role-to-user/add-role-to-user.component";
import {fromEvent, Subscription, take} from "rxjs";
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {TemplatePortal} from "@angular/cdk/portal";
import {filter} from "rxjs/operators";

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
  sub!: Subscription;

  @ViewChild('userMenu')
  userMenu!: TemplateRef<any>;

  overlayRef?: OverlayRef | null;

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
               private dialog: MatDialog,
               private userService:AppUserService,
               public overlay: Overlay,
               public viewContainerRef: ViewContainerRef) {

    this.typePersonne = data.typePersonne;
    this.person = data.person;
    if (this.typePersonne == 'utilisateur'){
     this.toggleControl.patchValue(!this.person.accountNonLocked);
     let user = this.person as UtilisateurDto;
     this.listRoles=user.roles
    }
    this.getPermissions();
  }

  open({ x, y }: MouseEvent, user: any) {
    this.close();
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo({ x, y })
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    this.overlayRef.attach(new TemplatePortal(this.userMenu, this.viewContainerRef, {
      $implicit: user
    }));

    this.sub = fromEvent<MouseEvent>(document, 'click')
      .pipe(
        filter(event => {
          const clickTarget = event.target as HTMLElement;
          return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
        }),
        take(1)
      ).subscribe(() => this.close())

  }
  close() {
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
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

  openDialogAdd() {
    this.dialog.open(AddRoleToUserComponent, {
      disableClose:false,
      data: {
        person:this.person ,
      },
    })
  }

  openDialogRemoveRole(role: RoleDto, id:number) {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      disableClose:false,
      data: {
        message: "Retirer le role " +role.roleName+ " à l'utilisateur ?",
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
