import { Injectable } from '@angular/core';
import {LoaderService} from "../loader/loader.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {finalize, Observable} from 'rxjs';
import {AuthentificationResponse} from "../../tm-api/src-api/models/authentification-response";
import {AppAuthenticationService} from "../authentification/app-authentication.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  private totalRequests = 0;
  constructor(private loaderService: LoaderService,
              private router:Router,
              private userAuthService:AppAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loaderService.show();

    let authResponse:AuthentificationResponse = {};
    if (sessionStorage.getItem("connectedUser")){
      if (this.userAuthService.isUserLogedAndTokenValid()){
        authResponse = JSON.parse(sessionStorage.getItem('connectedUser') as string);
        const authRequest = req.clone(
          {
            setHeaders :
              {
                Authorization: "Bearer " + authResponse.accessToken
              }
          }
        );
        return next.handle(authRequest).pipe(
          finalize(() =>  {
            this.totalRequests--;
            if (this.totalRequests == 0) {
              this.loaderService.hide()
            }
          })
        );
      }
      // else if (this.userAuthService.isUserLogedAndTokenValid()){
      //   authResponse = JSON.parse(sessionStorage.getItem('connectedUser') as string);
      //   const authRequest = req.clone(
      //     {
      //       setHeaders :
      //         {
      //           Authorization: "Bearer " + authResponse.refreshToken
      //         }
      //     }
      //   );
      //
      //   this.userAuthService.refreshToken();
      //   this.router.navigate(['']);
      //   return next.handle(req).pipe(
      //     finalize(() =>  {
      //       this.totalRequests--;
      //       if (this.totalRequests == 0) {
      //         this.loaderService.hide()
      //       }
      //     })
      //   );
      // }
      else {
        return next.handle(req).pipe(
          finalize(() =>  {
            this.totalRequests--;
            if (this.totalRequests == 0) {
              this.loaderService.hide()
            }
          })
        );
      }

    }
    else {
      this.router.navigate(['']);
      return next.handle(req).pipe(
        finalize(() =>  {
          this.totalRequests--;
          if (this.totalRequests == 0) {
            this.loaderService.hide()
          }
        })
      );
    }

  }
}
