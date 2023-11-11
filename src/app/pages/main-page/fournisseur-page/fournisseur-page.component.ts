import {Component} from '@angular/core';
import {UtilisateurDto} from "../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-fournisseur-page',
  templateUrl: './fournisseur-page.component.html',
  styleUrls: ['./fournisseur-page.component.scss']
})
export class FournisseurPageComponent {
  isChecked: boolean=false;

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
