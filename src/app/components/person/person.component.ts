import {Component, Input, OnInit} from '@angular/core';
import {ListViewDetailDialogComponent} from "../list-view-detail-dialog/list-view-detail-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {ClientAppServiceService} from "../../../services/clientAppService/client-app-service.service";
import {ClientDto} from "../../../tm-api/src-api/models/client-dto";
import {PersonViewDetailComponent} from "../person-view-detail/person-view-detail.component";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {ConfirmDeleteDialogComponent} from "../confirm-delete-dialog/confirm-delete-dialog.component";
import {AppFournisseurService} from "../../../services/fournisseurService/app-fournisseur.service";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {PersonSearchDto} from "../../../tm-api/src-api/models/person-search-dto";
import {AppPersonSearchService} from "../../../services/personSearch/app-person-search.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit{
  typesOfShoes: any;
  @Input() typePersonne:String = "";
  @Input() filterObject:PersonSearchDto = {};
  person: any;
  listClient:Array<any> = [];
  selectedPerson:any;
  constructor(private dialog: MatDialog,
              private fournisseurService:AppFournisseurService,
              private userService:AppUserService,
              private filterPersonService:AppPersonSearchService,
              private clientService:ClientAppServiceService) {
  }

  ngOnInit(): void {
      this.findAll()
  }

  findAll(){
    if (this.typePersonne =="client"){
      this.clientService.findAll().subscribe(
        value => {
          this.person = value
        }
      )
    }
    if (this.typePersonne =="fournisseur"){
      this.fournisseurService.findAll().subscribe(
        value => {
          this.person = value
        }
      )
    }
    if (this.typePersonne =="utilisateur"){
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
    if (this.typePersonne =="client"){
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
