import {Component, Input, OnChanges, OnInit, signal, SimpleChanges} from '@angular/core';
import {AppComptaServiceService} from "../../../services/comptaService/app-compta-service.service";
import {ComptaGlobalDto} from "../../../tm-api/src-api/models/compta-global-dto";
import {Column} from "../list-view/list-view.component";
import {DatePipe} from "@angular/common";
import {BillanComptableDto} from "../../../tm-api/src-api/models/billan-comptable-dto";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {AppSearchCommandService} from "../../../services/searchCommand/app-search-command.service";
import {VenteDto} from "../../../tm-api/src-api/models/vente-dto";
import {CommandeFournisseurDto} from "../../../tm-api/src-api/models/commande-fournisseur-dto";
import {CommandeClientDto} from "../../../tm-api/src-api/models/commande-client-dto";
import {DepensesDto} from "../../../tm-api/src-api/models/depenses-dto";
import {AppDepenseService} from "../../../services/depenseService/app-depense.service";

@Component({
  selector: 'app-view-bilan-compta',
  templateUrl: './view-bilan-compta.component.html',
  styleUrls: ['./view-bilan-compta.component.scss']
})
export class ViewBilanComptaComponent implements OnInit, OnChanges{

  bilan:ComptaGlobalDto = {};
  listeVente:Array<VenteDto> = [];
  listeComClient:Array<CommandeClientDto> = [];
  listeComFournisseur:Array<CommandeFournisseurDto> = [];
  listeDepense:Array<DepensesDto> = [];

  detail:any;
  @Input() date1:string='';
  @Input() date2:string='';
  display=false;
  permission: Array<string> = [];

/*
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
      columnDef: 'Espececom',
      header: 'Espece',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleCommande?.espece
      }
    },
    {
      columnDef: 'Mobilecom',
      header: 'Mobile',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleCommande?.mobile
      }
    },
    {
      columnDef: 'Rembcom',
      header: 'Remb',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleCommande?.rembourssement
      }
    },
    {
      columnDef: 'Totalcom',
      header: 'Total',
      cell: (element: BillanComptableDto) =>{
        return( element.nouvelleCommande?.rembourssement! + element.nouvelleCommande?.espece! + element.nouvelleCommande?.mobile!)
      }
    },
    {
      columnDef: 'Espececom2',
      header: 'Espece',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneCommande?.espece
      }
    },
    {
      columnDef: 'Mobilecom2',
      header: 'Mobile',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneCommande?.mobile
      }
    },
    {
      columnDef: 'Rembcom2',
      header: 'Remb',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneCommande?.rembourssement
      }
    },
    {
      columnDef: 'Totalcom2',
      header: 'Total',
      cell: (element: BillanComptableDto) =>{
        return( element.ancienneCommande?.rembourssement! + element.ancienneCommande?.espece! + element.ancienneCommande?.mobile!)
      }
    },
    {
      columnDef: 'Encaissement effectif',
      header: 'Encaissement effectif',
      cell: (element: BillanComptableDto) =>{
        return(element.nouvelleCommande?.espece! + element.nouvelleCommande?.mobile! + element.ancienneCommande?.espece! + element.ancienneCommande?.mobile!)
      }
    },
    {
      columnDef: 'depense',
      header: 'Depense',
      cell: (element: BillanComptableDto) => `${element.depense}`,
    },
    {
      columnDef: 'Especedep',
      header: 'Espece',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleDepense?.espece
      }
    },
    {
      columnDef: 'Mobiledep',
      header: 'Mobile',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleDepense?.mobile
      }
    },
    {
      columnDef: 'Rembdep',
      header: 'Remb',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleDepense?.rembourssement
      }
    },
    {
      columnDef: 'Totaldep',
      header: 'Total',
      cell: (element: BillanComptableDto) =>{
        return( element.nouvelleDepense?.rembourssement! + element.nouvelleDepense?.espece! + element.nouvelleDepense?.mobile!)
      }
    },
    {
      columnDef: 'Espece',
      header: 'Espece',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneDepense?.espece
      }
    },
    {
      columnDef: 'Mobile',
      header: 'Mobile',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneDepense?.mobile
      }
    },
    {
      columnDef: 'Remb',
      header: 'Remb',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneDepense?.rembourssement
      }
    },
    {
      columnDef: 'Total',
      header: 'Total',
      cell: (element: BillanComptableDto) =>{
        return( element.ancienneDepense?.rembourssement! + element.ancienneDepense?.espece! + element.ancienneDepense?.mobile!)
      }
    },

    {
      columnDef: 'Depense effective',
      header: 'Depense effective',
      cell: (element: BillanComptableDto) =>{
        return(element.nouvelleDepense?.espece! + element.nouvelleDepense?.mobile! + element.ancienneDepense?.espece! + element.ancienneDepense?.mobile!)
      }
    },
    // {
    //   columnDef: 'avance',
    //   header: 'Avance',
    //   cell: (element: BillanComptableDto) => `${element.avance}`,
    // },
    {
      columnDef: 'argent en caisse',
      header: 'Argent en caisse',
      cell: (element: BillanComptableDto) => {
        return ((element.nouvelleCommande?.espece! + element.nouvelleCommande?.mobile! + element.ancienneCommande?.espece! + element.ancienneCommande?.mobile!) - (element.nouvelleDepense?.espece! + element.nouvelleDepense?.mobile! + element.ancienneDepense?.espece! + element.ancienneDepense?.mobile!))
      }
    },
    {
      columnDef: 'reste a payer',
      header: 'Reste a payer',
      cell: (element: BillanComptableDto) => {
        return (element.ca! - (element.nouvelleCommande?.espece! + element.nouvelleCommande?.mobile!+ element.nouvelleCommande?.rembourssement!))
      }
    },
    {
      columnDef: 'user',
      header: 'Utilisateur',
      cell: (element: BillanComptableDto) => `${element.user}`,
    },
  ];*/

  columnsRecap:Array<Column> = [
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: BillanComptableDto) =>{
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.date, 'mediumTime', 'UTC+1');

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
      columnDef: 'rembClient',
      header: 'Remb Client',
      cell: (element: BillanComptableDto) =>{
        return element.rembourssement
      }
    },
    {
      columnDef: 'Encaissement effectif',
      header: 'Encaissement effectif',
      cell: (element: BillanComptableDto) =>{
        return(element.nouvelleCommande?.espece! + element.nouvelleCommande?.mobile! + element.ancienneCommande?.espece! + element.ancienneCommande?.mobile!)
      }
    },
    {
      columnDef: 'depense',
      header: 'Depense enregistré',
      cell: (element: BillanComptableDto) => `${element.depense}`,
    },
    {
      columnDef: 'Depense effective',
      header: 'Depense effective',
      cell: (element: BillanComptableDto) =>{
        return(element.nouvelleDepense?.espece! + element.nouvelleDepense?.mobile! + element.ancienneDepense?.espece! + element.ancienneDepense?.mobile!)
      }
    },
    // {
    //   columnDef: 'avance',
    //   header: 'Avance',
    //   cell: (element: BillanComptableDto) => `${element.avance}`,
    // },
    {
      columnDef: 'argent en caisse',
      header: 'Argent en caisse',
      cell: (element: BillanComptableDto) => {
        return ((element.nouvelleCommande?.espece! + element.nouvelleCommande?.mobile! + element.ancienneCommande?.espece! + element.ancienneCommande?.mobile!) - (element.nouvelleDepense?.espece! + element.nouvelleDepense?.mobile! + element.ancienneDepense?.espece! + element.ancienneDepense?.mobile!))
      }
    },
    {
      columnDef: 'reste a payer',
      header: 'Reste a payer',
      cell: (element: BillanComptableDto) => {
        return (element.ca! - (element.nouvelleCommande?.espece! + element.nouvelleCommande?.mobile!) + element.rembourssement!)
      }
    },
    {
      columnDef: 'user',
      header: 'Utilisateur',
      cell: (element: BillanComptableDto) =>{
        if(element.user==''){
          return 'TOUT LE MONDE'
        }
       return `${element.user}`
      } ,
    },
  ];
  columnsPaiementComclient:Array<Column> = [
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: BillanComptableDto) =>{
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.date, 'mediumTime', 'UTC+1');

        return pipe.transform(element.date, 'EEE dd MMM yyyy') ;
      }
    },
    {
      columnDef: 'Espececom',
      header: 'Espece',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleCommande?.espece
      }
    },
    {
      columnDef: 'Mobilecom',
      header: 'Mobile',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleCommande?.mobile
      }
    },
    {
      columnDef: 'Rembcom',
      header: 'Remb',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleCommande?.rembourssement
      }
    },
    {
      columnDef: 'Totalcom',
      header: 'Total',
      cell: (element: BillanComptableDto) =>{
        return( element.nouvelleCommande?.rembourssement! + element.nouvelleCommande?.espece! + element.nouvelleCommande?.mobile!)
      }
    },
    {
      columnDef: 'Espececom2',
      header: 'Espece',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneCommande?.espece
      }
    },
    {
      columnDef: 'Mobilecom2',
      header: 'Mobile',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneCommande?.mobile
      }
    },
    {
      columnDef: 'Rembcom2',
      header: 'Remb',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneCommande?.rembourssement
      }
    },
    {
      columnDef: 'Totalcom2',
      header: 'Total',
      cell: (element: BillanComptableDto) =>{
        return( element.ancienneCommande?.rembourssement! + element.ancienneCommande?.espece! + element.ancienneCommande?.mobile!)
      }
    },
    {
      columnDef: 'user',
      header: 'Utilisateur',
      cell: (element: BillanComptableDto) =>{
        if(element.user==''){
          return 'TOUT LE MONDE'
        }
        return `${element.user}`
      } ,
    },
  ];
  columnsPaiementDepense:Array<Column> = [
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: BillanComptableDto) =>{
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.date, 'mediumTime', 'UTC+1');

        return pipe.transform(element.date, 'EEE dd MMM yyyy') ;
      }
    },
    {
      columnDef: 'Especedep',
      header: 'Espece',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleDepense?.espece
      }
    },
    {
      columnDef: 'Mobiledep',
      header: 'Mobile',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleDepense?.mobile
      }
    },
    {
      columnDef: 'Rembdep',
      header: 'Remb',
      cell: (element: BillanComptableDto) =>{
        return element.nouvelleDepense?.rembourssement
      }
    },
    {
      columnDef: 'Totaldep',
      header: 'Total',
      cell: (element: BillanComptableDto) =>{
        return( element.nouvelleDepense?.rembourssement! + element.nouvelleDepense?.espece! + element.nouvelleDepense?.mobile!)
      }
    },
    {
      columnDef: 'Espece',
      header: 'Espece',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneDepense?.espece
      }
    },
    {
      columnDef: 'Mobile',
      header: 'Mobile',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneDepense?.mobile
      }
    },
    {
      columnDef: 'Remb',
      header: 'Remb',
      cell: (element: BillanComptableDto) =>{
        return element.ancienneDepense?.rembourssement
      }
    },
    {
      columnDef: 'Total',
      header: 'Total',
      cell: (element: BillanComptableDto) =>{
        return( element.ancienneDepense?.rembourssement! + element.ancienneDepense?.espece! + element.ancienneDepense?.mobile!)
      }
    },
    {
      columnDef: 'user',
      header: 'Utilisateur',
      cell: (element: BillanComptableDto) =>{
        if(element.user==''){
          return 'TOUT LE MONDE'
        }
        return `${element.user}`
      } ,
    },
  ];

  columnsVente:Array<Column> = [
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
  columnsComFournisseur:Array<Column> = [
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

        // const time = pipe.transform(element.dateLivraison, 'mediumTime', 'UTC+1');

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
  columnsComClient:Array<Column> = [
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
  columnsDepense:Array<Column> = [
    {
      columnDef: 'date',
      header: 'Date depense',
      cell: (element: DepensesDto) =>{
        let pipe = new DatePipe('fr-FR');

        // const time = pipe.transform(element.dateDepense, 'mediumTime', 'UTC+1');

        return pipe.transform(element.dateDepense, 'EEE dd MMM yyyy');
      }
    },
    {
      columnDef: 'article',
      header: 'Article',
      cell: (element: DepensesDto) =>{
        return element.nomArticle ;
      }
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: DepensesDto) =>{
        return element.description ;
      }
    },
    {
      columnDef: 'quantite',
      header: 'Quantite',
      cell: (element: DepensesDto) => `${element.quantite}`,
    },
    {
      columnDef: 'prix',
      header: 'Prix unitaire',
      cell: (element: DepensesDto) => `${element.prixunitaire}`,
    },
    {
      columnDef: 'montant',
      header: 'Montant Total',
      cell: (element: DepensesDto) => `${element.montantTotal}`,
    },
  ];

  isChecked = false;
  voirTout = false;
  forUser = false;
  userName = '';
  lisUser:Array<UtilisateurDto> = []
  stepFinance = signal(0);
   openPaiementComClient = signal(false);
   openPaiementDepense = signal(false);
   openRecap = signal(false);

  step = signal(0);
   openComClient = signal(false);
   openComFournisseur = signal(false);
   openVente = signal(false);
   openDepense = signal(false);

  constructor(private bilanComptaService:AppComptaServiceService,
              private commandeSearcServjce:AppSearchCommandService,
              private depenseService:AppDepenseService,
              private appuserService:AppUserService) {
  }

  setStepFinance(index: number) {
    this.stepFinance.set(index);
  }

  nextStepFinance() {
    this.stepFinance.update(i => i + 1);
  }

  prevStepFinance() {
    this.stepFinance.update(i => i - 1);
  }

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
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
    this.findSaving();
  }

  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }

  findSaving(){
    if (this.forUser){

      if ((this.permission.includes('VENTE: LIRE') || this.permission.includes('VENTE: FILTRER')) && this.openVente()){
        this.commandeSearcServjce.filterCommand({datecommande1:this.date1, datecommande2:this.date2, createdBy:this.userName}, 'vente').subscribe(
          value => {
            this.listeVente = value;
            this.display = true;
          });
      }

      if ((this.permission.includes('COM_FOURNISSEUR: LIRE') || this.permission.includes('COM_FOURNISSEUR: FILTRER')) && this.openComFournisseur()){
        this.commandeSearcServjce.filterCommand({datecommande1:this.date1, datecommande2:this.date2, createdBy:this.userName}, 'fournisseur').subscribe(
          value => {
            this.listeComFournisseur = value;
            this.display = true;
          });
      }

      if ((this.permission.includes('COM_CLIENT: LIRE') || this.permission.includes('COM_CLIENT: FILTRER')) && this.openComClient()){
        this.commandeSearcServjce.filterCommand({datecommande1:this.date1, datecommande2:this.date2, createdBy:this.userName}, 'client').subscribe(
          value => {
            this.listeComClient = value;
            this.display = true;
          });
      }

      if ((this.permission.includes('DEPENSE: LIRE')) && this.openDepense()){
        this.depenseService.findByDateBetweenAndUser(this.date1, this.date2, this.userName).subscribe(
          value => {
            this.listeDepense = value;
            this.display = true;
          });
      }
    }
    else if (this.voirTout){
      if ((this.permission.includes('VENTE: LIRE') || this.permission.includes('VENTE: FILTRER')) && this.openVente()){
        this.commandeSearcServjce.filterCommand({datecommande1:this.date1, datecommande2:this.date2}, 'vente').subscribe(
          value => {
            this.listeVente = value;
            this.display = true;
          });
      }

      if ((this.permission.includes('COM_FOURNISSEUR: LIRE') || this.permission.includes('COM_FOURNISSEUR: FILTRER')) && this.openComFournisseur()){
        this.commandeSearcServjce.filterCommand({datecommande1:this.date1, datecommande2:this.date2}, 'fournisseur').subscribe(
          value => {
            this.listeComFournisseur = value;
            this.display = true;
          });
      }

      if ((this.permission.includes('COM_CLIENT: LIRE') || this.permission.includes('COM_CLIENT: FILTRER')) && this.openComClient()){
        this.commandeSearcServjce.filterCommand({datecommande1:this.date1, datecommande2:this.date2}, 'client').subscribe(
          value => {
            this.listeComClient = value;
            this.display = true;
          });
      }
      if ((this.permission.includes('DEPENSE: LIRE')) && this.openDepense()){
        this.depenseService.findByDateBetween(this.date1, this.date2).subscribe(
          value => {
            this.listeDepense = value;
            this.display = true;
          });
      }
    }
    else{
      let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);

      if ((this.permission.includes('VENTE: LIRE') || this.permission.includes('VENTE: FILTRER')) && this.openVente()){
        this.commandeSearcServjce.filterCommand({datecommande1:this.date1, datecommande2:this.date2, createdBy:utilisateurDto.nom+ " "+utilisateurDto.prenom}, 'vente').subscribe(
          value => {
            this.listeVente = value;
            this.display = true;
          });
      }

      if ((this.permission.includes('COM_FOURNISSEUR: LIRE') || this.permission.includes('COM_FOURNISSEUR: FILTRER')) && this.openComFournisseur()){
        this.commandeSearcServjce.filterCommand({datecommande1:this.date1, datecommande2:this.date2, createdBy:utilisateurDto.nom+ " "+utilisateurDto.prenom}, 'fournisseur').subscribe(
          value => {
            this.listeComFournisseur = value;
            this.display = true;
          });
      }

      if ((this.permission.includes('COM_CLIENT: LIRE') || this.permission.includes('COM_CLIENT: FILTRER')) && this.openComClient()){
        this.commandeSearcServjce.filterCommand({datecommande1:this.date1, datecommande2:this.date2, createdBy:utilisateurDto.nom+ " "+utilisateurDto.prenom}, 'client').subscribe(
          value => {
            this.listeComClient = value;
            this.display = true;
          });
      }
      if ((this.permission.includes('DEPENSE: LIRE')) && this.openDepense()){
        this.depenseService.findByDateBetweenAndUser(this.date1, this.date2, utilisateurDto.nom+ " "+utilisateurDto.prenom).subscribe(
          value => {
            this.listeDepense = value;
            this.display = true;
          });
      }
    }
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
      console.log(this.date2+ " "+this.date1)
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
