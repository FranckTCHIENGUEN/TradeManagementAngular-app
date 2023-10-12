import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppServiceService} from "../../../services/serviceService/app-service.service";
import {AppCatergorieServiceService} from "../../../services/categoriService/app-catergorie-service.service";
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {AppRoleService} from "../../../services/roleService/app-role.service";
import {ServiceDto} from "../../../tm-api/src-api/models/service-dto";
import {RoleDto} from "../../../tm-api/src-api/models/role-dto";
import {Permissions} from "../../../tm-api/src-api/models/permissions";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {CategoriServiceDto} from "../../../tm-api/src-api/models/categori-service-dto";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatLegacyListOption} from "@angular/material/legacy-list";
import {PaiementDto} from "../../../tm-api/src-api/models/paiement-dto";
import {MatListOption} from "@angular/material/list";

@Component({
  selector: 'app-save-role-dialog',
  templateUrl: './save-role-dialog.component.html',
  styleUrls: ['./save-role-dialog.component.scss']
})
export class SaveRoleDialogComponent implements OnInit{

  role:RoleDto = {};

  saveForm = this.formBuilder.group({
    nom:[this.role.roleName,[
      Validators.required
    ]],
  })

  listPermission: Array<Permissions> | undefined = [];
  listSelectedPermission: Set<Permissions> | undefined;
  private _matcher = new MyErrorStateMatcher();

  constructor(private formBuilder:FormBuilder,
              private roleService:AppRoleService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<SaveRoleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: ArticleDto) {

    if (this.data != null){
      this.role = this.data;
      this.saveForm.controls.nom.setValue(this.role.roleName);
      this.role.permissions?.forEach(value => {
        this.listSelectedPermission?.add(value);
      })

    }
  }

  get matcher(): MyErrorStateMatcher {
    return this._matcher;
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
      this.listSelectedPermission?.forEach(value => {
        this.role.permissions?.push(value)
      })
      this.roleService.save(this.role).subscribe(
        value => {
          this.closeDialog({etat :'ok'});
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "Role"+ this.role.roleName + " enregisgré avec succé",
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

  updateSelectedPermissions(selected: MatListOption[]) {
    selected.forEach(value => {
      this.listSelectedPermission?.add(value as Permissions)
    });
  }
}
