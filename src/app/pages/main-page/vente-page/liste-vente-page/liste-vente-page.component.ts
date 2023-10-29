import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AppVenbteServiceService} from "../../../../../services/venteService/app-venbte-service.service";
import {VenteDto} from "../../../../../tm-api/src-api/models/vente-dto";
import {DataLinkTransfertService} from "../../../../../services/dataLinkTransfert/Data-link-transfert.service";
import {Column} from "../../../../components/list-view/list-view.component";
import {DatePipe} from "@angular/common";
import {CommandSearch} from "../../../../../tm-api/src-api/models/command-search";
import {AppSearchCommandService} from "../../../../../services/searchCommand/app-search-command.service";
import {CommandeClientDto} from "../../../../../tm-api/src-api/models/commande-client-dto";
import {UtilisateurDto} from "../../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-liste-vente-page',
  templateUrl: './liste-vente-page.component.html',
  styleUrls: ['./liste-vente-page.component.scss']
})
export class ListeVentePageComponent implements OnInit{

  listeVente:Array<VenteDto> = [];
  permission: Array<string> = [];
  display=false;
  filterValue:string = '';
  columns:Array<Column> = [
    {
      columnDef: 'date',
      header: 'Date vente',
      cell: (element: VenteDto) =>{
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.datevente, 'mediumTime', 'UTC+1');

        return pipe.transform(element.datevente, 'EEEE MMMM yyyy') ;
      }
    },
    {
      columnDef: 'client',
      header: 'Nom client',
      cell: (element: VenteDto) =>{
        return element.client?.nom + " "+ element.client?.prenom
      }
    },
    {
      columnDef: 'montant',
      isSorTable:true,
      header: 'Montant vente',
      cell: (element: VenteDto) => `${element.montantTotal}`,
    },

    {
      columnDef: 'facture',
      isDownlable:true,
      header: 'Facture',
      cell: (element: VenteDto) => `${element.id}`,
    },
  ];
  // columsName = this.columns.map(c => c.columnDef);
  isChecked = false;
  constructor(private dataLinkTransfer: DataLinkTransfertService,
              private venteService:AppVenbteServiceService,
              private commandeSearcServjce:AppSearchCommandService,
              @Inject(LOCALE_ID) private locale: string,) {


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
    this.dataLinkTransfer.name.subscribe(value => this.filterValue = value)
    this.findAll();

  }

  findAll(){
    this.display = false
    if (this.permission.includes('VENTE: LIRE')){
      this.venteService.findAll().subscribe(
        value => {
          this.listeVente = value;
          this.display = true
        });
    }
  }

  filter($event: CommandSearch) {
    this.display = false;
    if (this.permission.includes('VENTE: FILTRER')){
      this.commandeSearcServjce.filterCommand($event, 'vente').subscribe(
        value => {
          this.listeVente = value;
          this.display = true;
        })
    }

  }
}
