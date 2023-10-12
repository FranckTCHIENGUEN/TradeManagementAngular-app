import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Column} from "../../../../components/list-view/list-view.component";
import {CommandeClientDto} from "../../../../../tm-api/src-api/models/commande-client-dto";
import {DataLinkTransfertService} from "../../../../../services/dataLinkTransfert/Data-link-transfert.service";
import {AppCommandClientService} from "../../../../../services/commandClientService/app-command-client.service";
import {DatePipe} from "@angular/common";
import {AppSearchCommandService} from "../../../../../services/searchCommand/app-search-command.service";
import {CommandSearch} from "../../../../../tm-api/src-api/models/command-search";
import {UtilisateurDto} from "../../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-list-commande-client',
  templateUrl: './list-commande-client.component.html',
  styleUrls: ['./list-commande-client.component.scss']
})
export class ListCommandeClientComponent implements OnInit{

  listeCommande:Array<CommandeClientDto> = [];
  permission: Array<string> = [];
  display=false;
  filterValue:string = '';
  columns:Array<Column> = [
    {
      columnDef: 'date',
      isSorTable:true,
      header: 'Date commande',
      cell: (element: CommandeClientDto) =>{
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.datevente, 'mediumTime', 'UTC+1');

        return pipe.transform(element.datecommande, 'EEE dd MMM yyyy') ;
      }
    },
    {
      columnDef: 'client',
      isSorTable:true,
      header: 'Nom client',
      cell: (element: CommandeClientDto) => {
        return element.client?.nom + " "+ element.client?.prenom
      },
    },
    {
      columnDef: 'montant',
      isSorTable:true,
      header: 'Montant Total',
      cell: (element: CommandeClientDto) => `${element.montantTotal}`,
    },
    {
      columnDef: 'avance',
      isSorTable:true,
      header: 'Avance',
      cell: (element: CommandeClientDto) => `${element.avance}`,
    },
    {
      columnDef: 'reste',
      isSorTable:true,
      header: 'Reste à payer',
      cell: (element: CommandeClientDto) => `${element.resteApayer}`,
    },
    {
      columnDef: 'date retrait',
      isSorTable:true,
      header: 'Date retrait',
      cell: (element: CommandeClientDto) => {
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.datevente, 'mediumTime', 'UTC+1');

        return pipe.transform(element.dateRetrait, 'EEE dd MMM yyyy') ;
      },
    },
    {
      columnDef: 'etat',
      isSorTable:true,
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
  isChecked = false;

  constructor(private dataLinkTransfer: DataLinkTransfertService,
              private commandeClientService:AppCommandClientService,
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
    console.log(this.permission)
    this.dataLinkTransfer.name.subscribe(value => this.filterValue = value)
    this.findAll();

  }

  findAll(){
    this.display=false;
    if (this.permission.includes('COM_CLIENT: LIRE')){
      this.commandeClientService.findAll().subscribe(
        value => {
          this.listeCommande = value;
          this.display = true
        });
    }

  }

  filter($event: CommandSearch) {
    this.display = false;
    if (this.permission.includes('COM_CLIENT: FILTRER')){
      this.commandeSearcServjce.filterCommand($event, 'client').subscribe(
        value => {
          this.listeCommande = value;
          this.display = true;
        })
    }

  }
}
