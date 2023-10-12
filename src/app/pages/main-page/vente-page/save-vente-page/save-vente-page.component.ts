import { Component } from '@angular/core';
import {UtilisateurDto} from "../../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-save-vente-page',
  templateUrl: './save-vente-page.component.html',
  styleUrls: ['./save-vente-page.component.scss']
})
export class SaveVentePageComponent {
  permission: Array<string> = [];

  constructor() {
    this.getPermissions();
  }

  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }
}
