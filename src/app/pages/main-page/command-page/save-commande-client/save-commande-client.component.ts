import {Component} from '@angular/core';
import {UtilisateurDto} from "../../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
    selector: 'app-save-commande-client',
    templateUrl: './save-commande-client.component.html',
    styleUrls: ['./save-commande-client.component.scss'],
    standalone: false
})
export class SaveCommandeClientComponent {

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
