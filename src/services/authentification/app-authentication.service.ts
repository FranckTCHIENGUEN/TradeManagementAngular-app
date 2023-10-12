import { Injectable } from '@angular/core';
import {AppUserService} from "../appUserServices/app-user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {AuthentificationRequest} from "../../tm-api/src-api/models/authentification-request";
import {AuthentificationResponse} from "../../tm-api/src-api/models/authentification-response";
import {AuthentificationService} from "../../tm-api/src-api/services/authentification.service";
import {DataLinkTransfertService} from "../dataLinkTransfert/Data-link-transfert.service";
import {UtilisateurDto} from "../../tm-api/src-api/models/utilisateur-dto";

@Injectable({
  providedIn: 'root'
})
export class AppAuthenticationService {

  constructor( private appUtilisateurService:AppUserService,
               private dataLinkTransfert:DataLinkTransfertService,
               private authencationService:AuthentificationService,
               private router:Router) { }

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  login(autRequest: AuthentificationRequest): Observable<AuthentificationResponse>{

    return this.authencationService.authentificationResponseResponseEntity({body: autRequest});

  }
  refreshToken(){
    this.authencationService.refreshToken();
  }
  disconect(){
    this.authencationService.disconect();
  }

  setConnectedUser(authenticationResponse:AuthentificationResponse){
    sessionStorage.setItem("connectedUser", JSON.stringify(authenticationResponse));
  }

  loadRegister(authRequest: AuthentificationRequest){
    if (sessionStorage.getItem("connectedUser")){

      this.appUtilisateurService.findByEmail(authRequest?.login as string)
        .subscribe(utilisateurDto=>{
          sessionStorage.setItem("userData", JSON.stringify(utilisateurDto))

          if (utilisateurDto.passwordState == "DEFAULT"){

            this.router.navigate(["register"])
          }
          else if (utilisateurDto.passwordState == "PERSONAL"){

            this.router.navigate(["mainPage"])
          }
          else {
            this.router.navigate(['']);

          }
          this.dataLinkTransfert.userConnected = sessionStorage.getItem('userData') as UtilisateurDto;
          return true;
        }, error => {
          return false;
        })

    }
  }

  isUserLogedAndTokenValid(){
    let authResponse:AuthentificationResponse = {};
    authResponse = JSON.parse(sessionStorage.getItem('connectedUser') as string);
    if (authResponse.accessToken !=null){
      const expiry = (JSON.parse(atob(authResponse.accessToken!.split('.')[1]))).exp;
      return expiry * 1000 > Date.now();
    }


     return false;
  }
  isUserLogedAndRefreshTokenValid(){
    let authResponse:AuthentificationResponse = {};
    authResponse = JSON.parse(sessionStorage.getItem('connectedUser') as string);
    if (authResponse.refreshToken !=null){
      const expiry = (JSON.parse(atob(authResponse.refreshToken!.split('.')[1]))).exp;
      return expiry * 1000 > Date.now();
    }

    return false;
  }


}
