import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {confirmPassValidator, createPasswordStrengthValidator, passCorect} from "../../../validation";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialogComponent {

  utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);

  registerForm = this.formBuilder.nonNullable.group({
    oldPass:['',
      {
        validators:[Validators.required,],
        asyncValidators: [passCorect(this.appUserService, this.utilisateurDto.id as number)],
        updateOn: 'blur'
      }
    ],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8), createPasswordStrengthValidator()])],
    confirmPassword: ['', Validators.compose([Validators.required,])],

  }, {
    validators: confirmPassValidator()
  });
  private _isPhonePortrait = false;




  matcher = new MyErrorStateMatcher();
  hide = true;
  hide2 = true;

  constructor(private appUserService: AppUserService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<ChangePasswordDialogComponent>,) {
    this.utilisateurDto= JSON.parse(sessionStorage.getItem("userData") as string);
  }

  // inscription(data: any):Observable<any>{
  //   return this.http.post('', data);
  // }
  error = false;


  get isPhonePortrait(): boolean {
    return this._isPhonePortrait;
  }
  get password() {
    return this.registerForm.controls['password'];
  }
  get oldPass() {
    return this.registerForm.controls['oldPass'];
  }

  dis = false

  getPassValid(){
    return !!(this.registerForm.errors != null && this.registerForm.errors['passValid']);

  }

  private closeDialog(param: { etat: string }) {
    this.dialogRef.close(param);
  }

  formSubmit() {
    this.dis = this.getPassValid();
    if (this.registerForm.valid) {
      this.utilisateurDto.passwordState = "PERSONAL";
      this.utilisateurDto.motdepasse = this.registerForm.value.password!;
      console.log(this.utilisateurDto)
      this.appUserService.changeAcess(this.utilisateurDto)
        .subscribe(user => {
          this.error = false;
          sessionStorage.setItem("userData", JSON.stringify(user));
          this.closeDialog({etat :'ok'});
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message:"Mot de passe modifié avec succé",
            },
          });
        }, error1 => {
          this.error = true;
        })
    }

  }
}
