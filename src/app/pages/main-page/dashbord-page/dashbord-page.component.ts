import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {CommandeClientDto} from "../../../../tm-api/src-api/models/commande-client-dto";
import {Column} from "../../../components/list-view/list-view.component";
import {DatePipe} from "@angular/common";
import {DataLinkTransfertService} from "../../../../services/dataLinkTransfert/Data-link-transfert.service";
import {AppCommandClientService} from "../../../../services/commandClientService/app-command-client.service";
import {AppSearchCommandService} from "../../../../services/searchCommand/app-search-command.service";
import {CommandSearch, EtatFinancier, UtilisateurDto} from "../../../../tm-api/src-api/models";
import {AppStatService} from "../../../../services/statSservice/app-stat.service";

@Component({
  selector: 'app-dashbord-page',
  templateUrl: './dashbord-page.component.html',
  styleUrls: ['./dashbord-page.component.scss']
})
export class DashbordPageComponent implements OnInit{

  listeCommandeValider:Array<CommandeClientDto> = [];
  listeCommandeEnArttente:Array<CommandeClientDto> = [];
  etatfinancier:EtatFinancier={};
  display=0;
  permission: Array<string> = [];
  filterValue:string = '';
  columns:Array<Column> = [
    {
      columnDef: 'date',
      header: 'Date commande',
      cell: (element: CommandeClientDto) =>{
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.datevente, 'mediumTime', 'UTC+1');

        return pipe.transform(element.datecommande, 'EEE dd MMM yyyy') ;
      }
    },
    {
      columnDef: 'client',
      header: 'Nom client',
      cell: (element: CommandeClientDto) => {
        return element.client?.nom + " "+ element.client?.prenom
      },
    },
    {
      columnDef: 'date retrait',
      header: 'Date retrait',
      cell: (element: CommandeClientDto) => {
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.datevente, 'mediumTime', 'UTC+1');

        return pipe.transform(element.dateRetrait, 'EEE dd MMM yyyy') ;
      },
    },
    {
      columnDef: 'etat',
      header: 'Etat',
      cell: (element: CommandeClientDto) => `${element.etatCommande}`,
    },

    {
      columnDef: 'facture',
      isDownlable:true,
      header: 'Facture',
      cell: (element: CommandeClientDto) => `${element.id}`,
    },
  ];

  constructor(private dataLinkTransfer: DataLinkTransfertService,
              private commandeSearchService:AppSearchCommandService,
              private statService:AppStatService,
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
    this.dataLinkTransfer.name.subscribe(value => this.filterValue = value);
    let commandSearchDto:CommandSearch = {
      etatCommande:"VALIDER"
    }
    let commandSearchDto2:CommandSearch = {
      etatCommande:"EN_PREPARATION"
    }
    let commandSearchDto3:CommandSearch = {
      etatCommande:"RECEPTIONER"
    }
    if(this.permission.includes('COM_CLIENT: FILTRER')){
      this.commandeSearchService.filterCommand(commandSearchDto, "client").subscribe(
        (value: CommandeClientDto[]) => {
          this.listeCommandeValider = value;
          this.display++
        });
      this.commandeSearchService.filterCommand(commandSearchDto2, "client").subscribe(
        (value: CommandeClientDto[]) => {
          this.listeCommandeEnArttente = value;
          this.display++
        });
      this.commandeSearchService.filterCommand(commandSearchDto3, "client").subscribe(
        (value: CommandeClientDto[]) => {
          for (let commandeClientDto of value) {
            this.listeCommandeEnArttente.push(commandeClientDto) ;
          }
          this.display++
        });
    }

    if(this.permission.includes('STAT: LIRE_ETAT_FINANCIER')){
      this.statService.getEtatFinancierMonthYear(new Date().getMonth()+1, new Date().getFullYear()).subscribe(
        value => {
          this.etatfinancier=value;
        }
      );
    }
  }
}
