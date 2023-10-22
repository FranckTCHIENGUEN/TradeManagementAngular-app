import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppComptaServiceService} from "../../../services/comptaService/app-compta-service.service";
import {ComptaGlobalDto} from "../../../tm-api/src-api/models/compta-global-dto";
import {Column} from "../list-view/list-view.component";
import {DatePipe} from "@angular/common";
import {BillanComptableDto} from "../../../tm-api/src-api/models/billan-comptable-dto";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {AppUserService} from "../../../services/appUserServices/app-user.service";

@Component({
  selector: 'app-view-bilan-compta',
  templateUrl: './view-bilan-compta.component.html',
  styleUrls: ['./view-bilan-compta.component.scss']
})
export class ViewBilanComptaComponent implements OnInit, OnChanges{

  bilan:ComptaGlobalDto = {};
  detail:any;
  @Input() date1:string='';
  @Input() date2:string='';
  display=false;
  permission: Array<string> = [];
  columns:Array<Column> = [
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: BillanComptableDto) =>{
        let pipe = new DatePipe('fr-FR');

        const time = pipe.transform(element.date, 'mediumTime', 'UTC+1');

        return pipe.transform(element.date, 'EEE dd MMM yyyy') ;
      }
    },
    {
      columnDef: 'CA',
      header: 'CA',
      cell: (element: BillanComptableDto) =>{
        return element.ca
      }
    },
    {
      columnDef: 'depense',
      header: 'Depense',
      cell: (element: BillanComptableDto) => `${element.depense}`,
    },
    {
      columnDef: 'avance',
      header: 'Avance',
      cell: (element: BillanComptableDto) => `${element.avance}`,
    },
    {
      columnDef: 'argent encaisse',
      header: 'Argent en caisse',
      cell: (element: BillanComptableDto) => `${element.argentEnCaisse}`,
    },
    {
      columnDef: 'user',
      header: 'Utilisateur',
      cell: (element: BillanComptableDto) => `${element.user}`,
    },
  ];
  isChecked = false;
  voirTout = false;
  forUser = false;
  userName = '';
  lisUser:Array<UtilisateurDto> = []

  constructor(private bilanComptaService:AppComptaServiceService, private appuserService:AppUserService) {
  }
  ngOnInit(): void {
    this.getPermissions();
    if (this.permission.includes('UTILISATEUR: LIRE')){
      this.appuserService.findAll().subscribe(value => {
        this.lisUser = value;
      })
    }

    this.find();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getPermissions();
    this.find();
  }

  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }

   find(){


    if (this.forUser){
      this.bilanComptaService.findByDayBetweenAndUser(this.date1, this.date2, this.userName).subscribe(
        value => {
          this.bilan=value;
          this.detail=this.bilan.billanComptableDtos;
          this.display=true;
        }
      )
    }
    else if (this.voirTout){
      this.bilanComptaService.findByDayBetween(this.date1, this.date2).subscribe(
        value => {
          this.bilan=value;
          this.detail=this.bilan.billanComptableDtos;
          this.display=true;
        }
      )
    }
    else{
      let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
      this.bilanComptaService.findByDayBetweenAndUser(this.date1, this.date2, utilisateurDto.nom+ " "+utilisateurDto.prenom).subscribe(
        value => {
          this.bilan=value;
          this.detail=this.bilan.billanComptableDtos;
          this.display=true;
        }
      )
    }

  }



}
