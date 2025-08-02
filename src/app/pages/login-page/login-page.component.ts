import {Component, HostBinding} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {Router} from "@angular/router";
import {AuthentificationRequest} from "../../../tm-api/src-api/models/authentification-request";
import {AppAuthenticationService} from "../../../services/authentification/app-authentication.service";
import {CookieService} from "ngx-cookie-service";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    providers: [CookieService],
    standalone: false
})
export class LoginPageComponent {
  loginForm = this.formBuilder.nonNullable.group({
    login:['',[Validators.required, Validators.email]],
    motDePasse:['',[Validators.required, Validators.minLength(1)]]
  });
  authRequest: AuthentificationRequest = {};
  matcher = new MyErrorStateMatcher();
  hide = true;
  error = false;
  @HostBinding('class') className = '';

  constructor(private formBuilder :FormBuilder,
              private router:Router,
              private cookie: CookieService,
              private overlay: OverlayContainer,
              private authService: AppAuthenticationService) {
    if (sessionStorage.getItem("userData")){
      sessionStorage.removeItem("userData")
    }
    if (sessionStorage.getItem("connectedUser")){
      sessionStorage.removeItem("connectedUser")
    }
  }

  ngOnInit(): void {

    if (this.cookie.check("viewMode")){
      this.className = this.cookie.get("viewMode");
      this.overlay.getContainerElement().classList.add(this.cookie.get("viewMode"));
    }
  }

  formSubmit() {

    if (this.loginForm.valid){

      // this.router.navigate(["/mainPage"]);
      this.authRequest.login = this.loginForm.value.login;
      this.authRequest.motDePasse = this.loginForm.value.motDePasse;

      this.authService.login(this.authRequest)
        .subscribe(
          data =>{
            this.error=false;
            this.authService.setConnectedUser(data);
            if (this.authService.isUserLogedAndTokenValid()){
              this.authService.loadRegister(data.user!);
            }
          },
          error =>{
            this.error = true
            console.log(error);
          }
        );
    }
  }
}
