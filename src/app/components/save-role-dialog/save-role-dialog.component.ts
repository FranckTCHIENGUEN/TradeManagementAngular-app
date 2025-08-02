import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AppRoleService} from "../../../services/roleService/app-role.service";
import {RoleDto} from "../../../tm-api/src-api/models/role-dto";
import {Permissions} from "../../../tm-api/src-api/models/permissions";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatSelectionList} from "@angular/material/list";

@Component({
    selector: 'app-save-role-dialog',
    templateUrl: './save-role-dialog.component.html',
    styleUrls: ['./save-role-dialog.component.scss'],
    standalone: false
})
export class SaveRoleDialogComponent implements OnInit{

  role:RoleDto = {};

  saveForm = this.formBuilder.group({
    nom:['',[
      Validators.required
    ]],
  })

  listPermission: Set<Permissions> =  new  Set<Permissions>();
  listSelectedPermission: Set<Permissions> = new Set<Permissions>();
  private _matcher = new MyErrorStateMatcher();

  constructor(private formBuilder:FormBuilder,
              private roleService:AppRoleService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<SaveRoleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {


    if (this.data != null){
      this.role = this.data.role;
      this.saveForm.controls.nom.setValue(this.role.roleName as string);
      this.roleService.findAllPermissions().subscribe(value => {
        value.forEach(value1 => {
         let present = false
          this.role.permissions?.forEach(value => {
            this.listSelectedPermission?.add(value);
              if (value1.id == value.id){
                present = true;

            }
          })
          if (!present){
            this.listPermission.add(value1)
          }

        })
      })
    }else {
      this.findAllPermission()
    }
  }

  get matcher(): MyErrorStateMatcher {
    return this._matcher;
  }

  findAllPermission(){
    this.roleService.findAllPermissions().subscribe(value => {
      value.forEach(value1 => {
        this.listPermission.add(value1)
      })
    })
  }

  closeDialog(p: { etat: string }) {
    this.dialogRef.close();
  }

  ngOnInit(): void {


  }

  formSubmit() {

    if(this.saveForm.valid){
      let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);
      this.role.idEntreprise = userConnected.entreprise?.id;
      this.role.roleName = this.saveForm.controls.nom.value as string;
      this.role.permissions = new Array<Permissions>();
      this.listSelectedPermission?.forEach(value => {
        this.role.permissions?.push(value)
      })

      this.roleService.save(this.role).subscribe(
        value => {
          this.closeDialog({etat :'ok'});
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "Role "+ this.role.roleName + " enregisgré avec succé",
            },
          });
        }
      )
    }
    else {
      this.dialog.open(ConfirmDialogComponent, {
        disableClose:false,
        data: {
          message: "Le formulaire contient des erreurs",
        },
      });
    }

  }

  updateSelectedPermissions(selected: MatSelectionList) {

    selected.selectedOptions.selected.forEach(value => {
      let permission = value.value as Permissions;
      this.listSelectedPermission?.add(permission)
      this.listPermission?.delete(permission);
    });
  }
  remveSelectedPermissions(selected: Permissions) {
      this.listSelectedPermission?.delete(selected)
      this.listPermission?.add(selected);

  }
}
