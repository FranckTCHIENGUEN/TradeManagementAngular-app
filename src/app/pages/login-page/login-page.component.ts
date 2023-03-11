import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm = this.formBuilder.nonNullable.group({
    login:['',[Validators.required]],
    motDePasse:['',[Validators.required, Validators.minLength(1)]]
  });
  // authRequest: AuthentificationRequest = {};
  matcher = new MyErrorStateMatcher();
  hide = true;
  error = false;

  constructor(private formBuilder :FormBuilder, private router:Router) {
    // if (sessionStorage.getItem("userData")){
    //   sessionStorage.removeItem("userData")
    // }
    // if (sessionStorage.getItem("connectedUser")){
    //   sessionStorage.removeItem("connectedUser")
    // }
  }

  ngOnInit(): void {
  }

  formSubmit() {

    if (this.loginForm.valid){

      this.router.navigate(["/mainPage"]);
      // this.authRequest.login = this.loginForm.value.login;
      // this.authRequest.motDePasse = this.loginForm.value.motDePasse;
      //
      // this.authService.login(this.authRequest)
      //   .subscribe(
      //     data =>{
      //       this.error=false;
      //       this.authService.setConnectedUser(data);
      //       if (this.authService.isUserLogedAndTokenValid()){
      //         this.authService.loadRegister(this.authRequest);
      //       }
      //     },
      //     error =>{
      //       this.error = true
      //       console.log(error);
      //     }
      //   );
    }
  }
}
