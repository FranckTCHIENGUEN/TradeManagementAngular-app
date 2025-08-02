import {Component} from '@angular/core';
import {UtilisateurDto} from "../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
    selector: 'app-client-page',
    templateUrl: './client-page.component.html',
    styleUrls: ['./client-page.component.scss'],
    standalone: false
})
export class ClientPageComponent {


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
