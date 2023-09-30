import {Component, Input, OnInit} from '@angular/core';
import {Observable, Observer} from "rxjs";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {menuList} from "../../../menuList";

class menuProperties {
  id?:String;
  routerLink?:String;
  label?:String;
  icon?:String;
  content?:Component;
}

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.scss']
})
export class SecondaryMenuComponent implements OnInit{
  data = menuList;
  sousMenu?:any;
  asyncTabs : Observable<menuProperties[]> ;
  activeLink?:any;
  @Input() title: any;

  constructor(private route:ActivatedRoute, private dataLinkTransfert:DataLinkTransfertService, private  router:Router) {
    for (let i=0; i<this.data.length; i++) {
      if (this.router.url.includes((this.data)[i].routerLink)){
        this.sousMenu = (this.data)[i].submenu;
        // this.activeLink = this.sousMenu[0].routerLink;

        i=(this.data).length
      }
    }
    for (let j=0; j<this.sousMenu.length; j++ ) {
      if (this.router.url.includes(this.sousMenu[j].routerLink)){
        this.activeLink = this.sousMenu[j].routerLink;
        j=(this.sousMenu).length
      }
    }
    this.router.events.subscribe(value => {
      if(value instanceof NavigationEnd) {
        for (let j=0; j<this.sousMenu.length; j++ ) {
          if (this.router.url.includes(this.sousMenu[j].routerLink)){
            this.activeLink = this.sousMenu[j].routerLink;
            j=(this.sousMenu).length
          }
        }
      }
    });


    this.asyncTabs = new Observable( ( observer : Observer<menuProperties[]> ) => {
      setTimeout ( () => {
        observer.next(this.sousMenu);
      }, 1000);
    });

  }

  ngOnInit(): void {

  }
}
