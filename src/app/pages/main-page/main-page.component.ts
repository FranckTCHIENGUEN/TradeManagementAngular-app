import {Component, EventEmitter, HostBinding, HostListener, ViewChild} from '@angular/core';
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {MatSidenav} from "@angular/material/sidenav";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {AppCommandClientService} from "../../../services/commandClientService/app-command-client.service";
import {Router} from "@angular/router";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {ConfirmDeleteDialogComponent} from "../../components/confirm-delete-dialog/confirm-delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {PersonViewDetailComponent} from "../../components/person-view-detail/person-view-detail.component";
import {ViewenterpriseDialogComponent} from "../../components/viewenterprise-dialog/viewenterprise-dialog.component";
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";
import {AppAuthenticationService} from "../../../services/authentification/app-authentication.service";

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
  permission: Array<string> = [];
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  addNewItem(value: string) {
    this.dataTransfert.changeName(value.trim().toLowerCase());

  }


  constructor(private dataTransfert:DataLinkTransfertService,
              private router: Router,
              private authenservice: AppAuthenticationService,
              private overlay: OverlayContainer,
              private dialog: MatDialog,) {
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

    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'my-dark-theme';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });

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
  private _userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);

  get event(): EventEmitter<any> {
    return this._event;
  }


  get userConnected(): UtilisateurDto {
    return this._userConnected;
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

  callDialogDetailPerson() {
    this.dialog.open(PersonViewDetailComponent, {
      height: '60%',
      width: '80%',
      disableClose:false,
      data: {
        person: JSON.parse(sessionStorage.getItem('userData') as string),
        typePersonne: "utilisateur"
      },
    });
  }

  callDialogDetailentreprise() {
    let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);
    this.dialog.open(ViewenterpriseDialogComponent, {
      height: '60%',
      width: '80%',
      disableClose:false,
      data: {
        donnee: userConnected.entreprise,
      },
    });
  }

  deconnexion() {

    this.dialog.open(ConfirmDeleteDialogComponent, {
      disableClose:false,
      data:{
        message: "Voulez-vous quitter l'application ?"
      }
    }).afterClosed().subscribe(value => {
      if (value=='oui'){
        this.authenservice.disconect();
        this.router.navigate(['']);
      }
    });

  }

  navigateGestUser() {
    this.router.navigate(['mainPage/gest-entreprise']);
  }
}
