import {Component, EventEmitter, Output} from '@angular/core';
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {menuList} from "../../../menuList";

@Component({
  selector: 'app-primary-menu',
  templateUrl: './primary-menu.component.html',
  styleUrls: ['./primary-menu.component.scss']
})
export class PrimaryMenuComponent {
  navData = menuList;
  id?:String;
  activeLink?:any;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  constructor(private route: ActivatedRoute, private router:Router,
              private  dataLinkTransfert:DataLinkTransfertService) {
    this.activeLink = this.navData[0].routerLink
  }
}
