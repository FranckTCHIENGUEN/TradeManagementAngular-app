import { Injectable } from '@angular/core';
import {AppUserService} from "../appUserServices/app-user.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AppAuthenticationService} from "../authentification/app-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private userAuthService:AppAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userAuthService.isUserLogedAndTokenValid();
  }
}
