import {Component, OnInit} from '@angular/core';
import {UtilisateurDto} from "../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-gest-entreprise-page',
  templateUrl: './gest-entreprise-page.component.html',
  styleUrls: ['./gest-entreprise-page.component.scss']
})
export class GestEntreprisePageComponent implements OnInit{
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

  ngOnInit(): void {
    this.getPermissions();
  }
}
