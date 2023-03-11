import {Component, EventEmitter, HostListener, ViewChild} from '@angular/core';
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  // userConnected:UtilisateursDto =  {};
  opened = true;
  size = true;
  menuClass:String = 'grand';
  @ViewChild('sidenav', {static: true})
  sidenav!: MatSidenav;

  addNewItem(value: string) {
    this.dataTransfert.changeName(value.trim().toLowerCase());

  }


  constructor(private dataTransfert:DataLinkTransfertService) { }

  ngOnInit(): void {
    // this.dataTransfert.userConnected = JSON.parse(
    //   sessionStorage.getItem("userData") as string
    // );
    // this.userConnected = this.dataTransfert.userConnected;
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  private _event = new EventEmitter<any>;
  title: any;

  get event(): EventEmitter<any> {
    return this._event;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }
  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 768;
  }

  toggle() {
    if (this.size){
      this.menuClass = 'court';
    }else this.menuClass='grand';
    this.size = !this.size;
    console.log(this.event)
  }

  addItem(event: string) {
    this.title = event;
  }
}
