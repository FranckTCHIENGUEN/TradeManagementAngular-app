import { Component } from '@angular/core';
import {PersonSearchDto} from "../../../../tm-api/src-api/models/person-search-dto";
import {UtilisateurDto} from "../../../../tm-api/src-api/models/utilisateur-dto";
import {Permissions} from "../../../../tm-api/src-api/models/permissions";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent {
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
  filter($event: PersonSearchDto) {

  }
}
