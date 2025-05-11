import {Component, OnInit} from '@angular/core';
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {Column} from "../list-view/list-view.component";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {PersonSearchDto} from "../../../tm-api/src-api/models/person-search-dto";
import {AppPersonSearchService} from "../../../services/personSearch/app-person-search.service";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit{

  listeUtilisateur:Array<UtilisateurDto> = [];
  permission: Array<string> = [];
  display=false;
  filterValue:string = '';
  columns:Array<Column> = [
    {
      columnDef: 'nom',
      header: 'Nom',
      cell: (element: UtilisateurDto) =>{
        return element.nom + ' '+ element.prenom;
      }
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: UtilisateurDto) =>{
        return element.email ;
      }
    },
    {
      columnDef: 'role',
      header: 'Roles',
      cell: (element: UtilisateurDto) =>{
        let roles :string = '';
        element.roles?.forEach(value => {
          roles = roles + value.roleName + ' ';
        });
        return roles ;
      }
    },
    {
      columnDef: 'etat',
      header: 'Etat',
      cell: (element: UtilisateurDto) =>{

        if (element.accountNonLocked == true){
          return 'ACTIF';
        }
        else {
          return 'BLOQUER' ;
        }

      }
    },
    {
      columnDef: 'etat mot de passe',
      header: 'Etat Mot de passe',
      cell: (element: UtilisateurDto) =>{
        return element.passwordState ;
      }
    },
    {
      columnDef: 'sexe',
      header: 'Genre',
      cell: (element: UtilisateurDto) => `${element.genre}`,
    },
  ];
  isChecked: boolean=false;

  constructor(private userService:AppUserService,
              private dialog: MatDialog,
              private filterPersonService:AppPersonSearchService,) {
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

    this.findAll();
  }

  openDialogSave() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    dialogConfig.data= {
      typePersonne:'utilisateur'
    };

    this.dialog.open(SavePersonDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SavePersonDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();
  }

   findAll(){
    this.userService.findAll().subscribe(
      value => {
        this.listeUtilisateur = value;
      }
    )
  }
  filter(context:string, personSearch:PersonSearchDto){

    this.filterPersonService.fiterPerson(personSearch,context).subscribe(
      value => {
        this.listeUtilisateur = value
      }
    )
  }


}
