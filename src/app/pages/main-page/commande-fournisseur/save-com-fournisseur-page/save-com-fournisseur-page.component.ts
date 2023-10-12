import { Component } from '@angular/core';
import {UtilisateurDto} from "../../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-save-com-fournisseur-page',
  templateUrl: './save-com-fournisseur-page.component.html',
  styleUrls: ['./save-com-fournisseur-page.component.scss']
})
export class SaveComFournisseurPageComponent {
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
