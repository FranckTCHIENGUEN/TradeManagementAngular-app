import {Component, Inject} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ClientAppServiceService} from "../../../services/clientAppService/client-app-service.service";
import {AdresseDto, ContactDto, RoleDto, UtilisateurDto} from "../../../tm-api/src-api/models";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {AppFournisseurService} from "../../../services/fournisseurService/app-fournisseur.service";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {userExistsValidator} from "../../../validation";
import {MatSelectionList} from "@angular/material/list";
import {AppRoleService} from "../../../services/roleService/app-role.service";

@Component({
  selector: 'app-save-person-dialog',
  templateUrl: './save-person-dialog.component.html',
  styleUrls: ['./save-person-dialog.component.scss']
})
export class SavePersonDialogComponent {

  private client:any = {};

  saveForm = this.formBuilder.group({
    nom:[this.client.nom,[
      Validators.required
    ]],
    contact:this.formBuilder.array([

    ]),
    ville:[this.client.adresse?.ville],
    prenom:[this.client.prenom],
    genre:[this.client.genre, [
      Validators.required
    ]],
    pays:[this.client.adresse?.pays],
    quartier:[this.client.adresse?.adresse1],
    mail:[this.client.mail,[
      Validators.email
    ]],
  })
  usersaveForm = this.formBuilder.group({
    userMail:[this.client.email,
      {
        validators:[Validators.required,],
        asyncValidators: [userExistsValidator(this.userService)],
        updateOn: 'blur'
      }
    ],
  })
  private _matcher = new MyErrorStateMatcher();
  private _nombreContact=0;

  listRole: Set<RoleDto> =  new  Set<RoleDto>();
  listSelectedRole: Set<RoleDto> = new Set<RoleDto>();
  role:RoleDto[] = [];

   private _typePersonne?:String;
  private _personGenre = ['MASCULIN' , 'FEMININ' , 'ENTREPRISE'];

  get contact (){
    return this.saveForm.controls["contact"] as FormArray;
  }
  get userMail() {
    return this.usersaveForm.controls['userMail'];
  }
  nombretel(): boolean {
    return this._nombreContact >= 4;

  }

  constructor(private formBuilder:FormBuilder,
              private roleService:AppRoleService,
              private clientAppService:ClientAppServiceService,
              private fournisseurService:AppFournisseurService,
              private userService:AppUserService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<SavePersonDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    this._typePersonne = data.typePersonne;
    if (data.person !=null){
      this.client = data.person
      this.saveForm.patchValue(this.client)
      this.saveForm.controls.ville.setValue( this.client.adresse?.ville)
      this.saveForm.controls.pays.setValue( this.client.adresse?.pays)
      this.saveForm.controls.quartier.setValue( this.client.adresse?.adresse1)
      if (this.client.contactDto !=null){
        if (this.client.contactDto.tel1!=null){
          this.addLigne();
          this.contact.at(0).get('tel')?.patchValue(this.client.contactDto.tel1);
        }
        if (this.client.contactDto.tel2!=null){
          this.addLigne();
          this.contact.at(1).get('tel')?.patchValue(this.client.contactDto.tel2);
        }
        if (this.client.contactDto.tel3!=null){
          this.addLigne();
          this.contact.at(2).get('tel')?.patchValue(this.client.contactDto.tel3);
        }
        if (this.client.contactDto.tel4!=null){
          this.addLigne();
          this.contact.at(3).get('tel')?.patchValue(this.client.contactDto.tel4);
        }
        if (this._typePersonne == "utilisateur"){
          if (this.data.person.roles !=null){
            this.role = this.data.person.roles;
          }

          this.roleService.findAll().subscribe(value => {
            value.forEach(value1 => {
              let present = false
              this.role.forEach(value => {

                this.listSelectedRole?.add(value);
                if (value1.id == value.id){
                  present = true;
                }
              })
              if (!present){
                if (value1.roleName!="USER"){
                  this.listRole.add(value1)
                }
              }

            })
          })
        }
      }
    }else {
      this.findAllRole()
    }
  }

  updateSelectedRole(selected: MatSelectionList) {

    selected.selectedOptions.selected.forEach(value => {
      let permission = value.value as RoleDto;
      this.listSelectedRole?.add(permission)
      this.listRole?.delete(permission);
    });
  }

  remveSelectedRole(selected: RoleDto) {
    this.listSelectedRole?.delete(selected)
    this.listRole?.add(selected);

  }

  findAllRole(){
    this.roleService.findAll().subscribe(value => {
      value.forEach(value1 => {
        if (value1.roleName!="USER"){
          this.listRole.add(value1)
        }

      })
    })
  }
  closeDialog(p: { etat: string, data:any|null }) {
    this.dialogRef.close(p);
  }

  get matcher(): MyErrorStateMatcher {
    return this._matcher;
  }

  get personGenre(): string[] {
    return this._personGenre;
  }

  get typePersonne(): String {
    return <String>this._typePersonne;
  }

  addLigne() {
    const conctactForm = this.formBuilder.group({
      tel:["",[
        Validators.required,
      ]],
    });

    this.contact.push(conctactForm);
    this._nombreContact = this._nombreContact +1;
  }
  deleteLigne(contactIndex: number) {
    this.contact.removeAt(contactIndex);
    this._nombreContact = this._nombreContact -1;
  }

  disable(){
    return this._nombreContact <= 4;
  }
  formSubmit() {

    let proceed = true;

    if (this.typePersonne =="utilisateur"){
      if (!this.usersaveForm.valid){
        proceed = false
      }
    }

    if (this.saveForm.valid && proceed){
      let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);

        this.client.mail = this.saveForm.value.mail as string;
        this.client.photo = "https://res.cloudinary.com/dal83zeal/image/upload/v1695476069/TradeManagement-DefaultPicture/ctm3p9ppvi6gwlgpxnca.png";
        this.client.nom = this.saveForm.value.nom as string;
        this.client.prenom = this.saveForm.value.prenom as string;
        this.client.genre = this.saveForm.value.genre as 'MASCULIN' | 'FEMININ' | 'ENTREPRISE';

        let adresse:AdresseDto = {
          adresse1:this.saveForm.value.quartier as string,
          pays:this.saveForm.value.pays as string,
          ville:this.saveForm.value.ville as string
        }

        let contact:ContactDto = {
            tel1:this.contact.at(0)?.get("tel")?.value as string,
            tel2:this.contact.at(1)?.get("tel")?.value as string,
            tel3:this.contact.at(2)?.get("tel")?.value as string,
            tel4:this.contact.at(3)?.get("tel")?.value as string,
        }
        this.client.adresse= adresse ;
        this.client.contactDto = contact;

      if (this._typePersonne==='client'){
        this.client.idEntreprise = userConnected.entreprise?.id;
        this.clientAppService.save(this.client)
          .subscribe(value => {

            this.closeDialog({etat :'ok', data:value});
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: this.typePersonne + " enregisgré avec succé",
              },
            });
          })
      }
      else if (this._typePersonne==='fournisseur'){
        this.client.idEntreprise = userConnected.entreprise?.id;
        this.fournisseurService.save(this.client)
          .subscribe(value => {

            this.closeDialog({etat :'ok', data:value});
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: this.typePersonne + " enregisgré avec succé",
              },
            });
          })
      }
      else if (this._typePersonne==='utilisateur'){

        let user = this.client as UtilisateurDto
        if (user.id==undefined){
          user.accountNonLocked = true;
          user.passwordState = "DEFAULT"
        }
        user.entreprise = userConnected.entreprise;
        user.email = this.userMail.value as string;


        this.userService.save(user)
          .subscribe(value => {

            this.closeDialog({etat :'ok', data:value});
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: this.typePersonne + " enregisgré avec succé",
              },
            });
          })
      }
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
}
