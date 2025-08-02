import {Component, EventEmitter, Output} from '@angular/core';
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {menuList} from "../../../menuList";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";

@Component({
    selector: 'app-primary-menu',
    templateUrl: './primary-menu.component.html',
    styleUrls: ['./primary-menu.component.scss'],
    standalone: false
})
export class PrimaryMenuComponent {
  navData = menuList;
  id?:String;
  activeLink?:any;
  utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  constructor(private route: ActivatedRoute, private router:Router,
              private  dataLinkTransfert:DataLinkTransfertService) {
    this.activeLink = this.navData[0].routerLink
  }

  getView(permission: Array<string>):boolean{
    if(permission.length !=0){
      if(this.utilisateurDto.roles?.length !=0){
        let i=0;
        let exist=false
        do {

          let h =0;

          do {

            let j=0;
            let permissions = this.utilisateurDto.roles?.at(i)?.permissions;
            do {

              if (permissions?.at(j)?.permisssion == permission.at(h)){
                exist = true ;
              }
              j++;

            }while (j < permissions?.length! && !exist )

            h++;
          }while (h < permission?.length! && !exist )

          i++ ;
        }while (i < this.utilisateurDto.roles?.length! && !exist )

        return exist;
      }
      else return false;
    }
    else {
      return true
    }
      return false

  }
}
