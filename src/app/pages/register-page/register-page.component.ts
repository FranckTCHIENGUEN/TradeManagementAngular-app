import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import { Router } from '@angular/router';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {confirmPassValidator, createPasswordStrengthValidator} from "../../../validation";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  registerForm = this.formBuilder.nonNullable.group({

    password: ['', Validators.compose([Validators.required, Validators.minLength(8), createPasswordStrengthValidator()])],
    confirmPassword: ['', Validators.compose([Validators.required,])],

  }, {
    validators: confirmPassValidator()
  });
  private _isPhonePortrait = false;


  utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);

  matcher = new MyErrorStateMatcher();
  hide = true;
  hide2 = true;

  constructor(private appUserService: AppUserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private responsive: BreakpointObserver) {
  }

  // inscription(data: any):Observable<any>{
  //   return this.http.post('', data);
  // }
  error = false;

  get password() {
    return this.registerForm.controls['password'];
  }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        this._isPhonePortrait = result.matches;

      });
  }


  get isPhonePortrait(): boolean {
    return this._isPhonePortrait;
  }

  dis = false

  getPassValid(){
    return !!(this.registerForm.errors != null && this.registerForm.errors['passValid']);

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
          this.router.navigate(['']);
          sessionStorage.removeItem("connectedUser");

        }, error1 => {
          this.error = true;
        })
    }

  }
}
