import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Column} from "../../../../components/list-view/list-view.component";
import {DatePipe} from "@angular/common";
import {DataLinkTransfertService} from "../../../../../services/dataLinkTransfert/Data-link-transfert.service";
import {CommandeFournisseurDto} from "../../../../../tm-api/src-api/models/commande-fournisseur-dto";
import {
  AppCommandFournisseurService
} from "../../../../../services/commandFournisseurService/app-command-fournisseur.service";
import {AppSearchCommandService} from "../../../../../services/searchCommand/app-search-command.service";
import {CommandSearch} from "../../../../../tm-api/src-api/models/command-search";
import {UtilisateurDto} from "../../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
    selector: 'app-list-com-fournisseur-page',
    templateUrl: './list-com-fournisseur-page.component.html',
    styleUrls: ['./list-com-fournisseur-page.component.scss'],
    standalone: false
})
export class ListComFournisseurPageComponent implements OnInit{

  listeVente:Array<CommandeFournisseurDto> = [];
  permission: Array<string> = [];
  display=false;
  filterValue:string = '';
  isChecked = false;
  columns:Array<Column> = [
    {
      columnDef: 'date',
      header: 'Date commande',
      cell: (element: CommandeFournisseurDto) =>{
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.datecommande, 'mediumTime', 'UTC+1');

        return pipe.transform(element.datecommande, 'EEE dd MMM yyyy') ;
      }
    },
    {
      columnDef: 'fournissuer',
      header: 'Nom fournisseur',
      cell: (element: CommandeFournisseurDto) =>{
        return element.fournisseur?.nom + " "+ element.fournisseur?.prenom
      }
    },
    {
      columnDef: 'montant',
      header: 'Montant commande',
      cell: (element: CommandeFournisseurDto) => `${element.montantTotal}`,
    },
    {
      columnDef: 'avance',
      header: 'Avance',
      cell: (element: CommandeFournisseurDto) => `${element.avance}`,
    },
    {
      columnDef: 'reste',
      header: 'Reste A payer',
      cell: (element: CommandeFournisseurDto) => `${element.resteApayer}`,
    },
    {
      columnDef: 'dateLivraison',
      header: 'Date Livraison',
      cell: (element: CommandeFournisseurDto) =>{
        let pipe = new DatePipe('fr-FR');

        const time = pipe.transform(element.dateLivraison, 'mediumTime', 'UTC+1');

        return pipe.transform(element.dateLivraison, 'EEE dd MMM yyyy') ;
      },
    },
    {
      columnDef: 'etat',
      header: 'Etat',
      cell: (element: CommandeFournisseurDto) => `${element.etatCommande}`,
    },
    {
      columnDef: 'facture',
      isDownlable:true,
      header: 'Facture',
      cell: (element: CommandeFournisseurDto) => `${element.id}`,
    },
  ];
  // columsName = this.columns.map(c => c.columnDef);

  constructor(private dataLinkTransfer: DataLinkTransfertService,
              private comFourService:AppCommandFournisseurService,
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

    this.dataLinkTransfer.name.subscribe(value => this.filterValue = value)
    this.findAll();

  }

  findAll(){
    this.display=false;
    if (this.permission.includes('COM_FOURNISSEUR: LIRE') || this.permission.includes('COM_FOURNISSEUR: FILTRER')){
      this.commandeSearcServjce.filterCommand({datecommande1:new Date(new Date().setHours(0, 0, 0, 0)).toISOString(), datecommande2:new Date(new Date().setHours(23, 59, 59, 999)).toISOString()}, 'fournisseur').subscribe(
        value => {
          this.listeVente = value;
          this.display = true;
        });
    }

  }

  filter($event: CommandSearch) {
    this.display = false;
    if (this.permission.includes('COM_FOURNISSEUR: FILTRER')){
      this.commandeSearcServjce.filterCommand($event, 'fournisseur').subscribe(
        value => {
          this.listeVente = value;
          this.display = true;
        })
    }

  }
}
