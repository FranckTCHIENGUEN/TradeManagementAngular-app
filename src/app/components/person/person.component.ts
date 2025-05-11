import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {ClientAppServiceService} from "../../../services/clientAppService/client-app-service.service";
import {PersonViewDetailComponent} from "../person-view-detail/person-view-detail.component";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {ConfirmDeleteDialogComponent} from "../confirm-delete-dialog/confirm-delete-dialog.component";
import {AppFournisseurService} from "../../../services/fournisseurService/app-fournisseur.service";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {PersonSearchDto} from "../../../tm-api/src-api/models/person-search-dto";
import {AppPersonSearchService} from "../../../services/personSearch/app-person-search.service";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit{
  typesOfShoes: any;
  @Input() typePersonne:string = "";
  @Input() filterObject:PersonSearchDto = {};
  person: any;
  @Input() permission: Array<string> = [];
  listClient:Array<any> = [];
  selectedPerson:any;
  isChecked: boolean=false;

  constructor(private dialog: MatDialog,
              private fournisseurService:AppFournisseurService,
              private userService:AppUserService,
              private filterPersonService:AppPersonSearchService,
              private clientService:ClientAppServiceService) {
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
    // this.getPermissions();
      this.findAll()
  }

  findAll(){
    if (this.typePersonne =="client" && this.permission.includes('CLIENT: LIRE')){
      this.clientService.findAll().subscribe(
        value => {
          this.person = value
        }
      )
    }
    else if (this.typePersonne =="fournisseur" && this.permission.includes('FOURNISSEUR: LIRE')){
      this.fournisseurService.findAll().subscribe(
        value => {
          this.person = value
        }
      )
    }
   else if (this.typePersonne =="utilisateur" && this.permission.includes('UTILISATEUR: LIRE')){
      this.userService.findAll().subscribe(
        value => {
          this.person = value
        }
      )
    }
  }

  filter(context:string, personSearch:PersonSearchDto){

      this.filterPersonService.fiterPerson(personSearch,context).subscribe(
        value => {
          this.person = value
        }
      )
  }

  openDialogSave() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    dialogConfig.data= {
      typePersonne:this.typePersonne
    };

    this.dialog.open(SavePersonDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SavePersonDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.ngOnInit();
        }
      }
    );
    dialogRef.close();
  }

  openDialogView(data: any) {
    this.dialog.open(PersonViewDetailComponent, {
      height: '60%',
      width: '80%',
      disableClose:false,
      data: {
        person: data,
        typePersonne: this.typePersonne
      },
    });
  }

  openDialogEdit(person: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    dialogConfig.data= {
      typePersonne:this.typePersonne,
      person: person,
    };

    this.dialog.open(SavePersonDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SavePersonDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.ngOnInit();
        }
      }
    );
    dialogRef.close();

  }

  delete() {
    if (this.typePersonne =="client" && this.permission.includes('CLIENT: SUPPRIMER')){
      this.dialog.open(ConfirmDeleteDialogComponent, {
        disableClose:false,
      }).afterClosed().subscribe(value => {
        if (value=='oui'){
          this.clientService.delete(this.selectedPerson.id).subscribe(value1 => {
            this.ngOnInit()
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: this.typePersonne + " supprimé avec succé",
              },
            });
          })
        }
      });
    }
    if (this.typePersonne =="utilisateur"){
      this.dialog.open(ConfirmDeleteDialogComponent, {
        disableClose:false,
      }).afterClosed().subscribe(value => {
        if (value=='oui'){
          this.userService.delete(this.selectedPerson.id).subscribe(value1 => {
            this.ngOnInit()
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: this.typePersonne + " supprimé avec succé",
              },
            });
          })
        }
      });
    }
    if (this.typePersonne =="fournisseur"){
      this.dialog.open(ConfirmDeleteDialogComponent, {
        disableClose:false,
      }).afterClosed().subscribe(value => {
        if (value=='oui'){
          this.fournisseurService.delete(this.selectedPerson.id).subscribe(value1 => {
            this.ngOnInit()
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: this.typePersonne + " supprimé avec succé",
              },
            });
          })
        }
      });
    }
  }

  setSelectedPerson(person: any) {
    this.selectedPerson = person;
  }
}
