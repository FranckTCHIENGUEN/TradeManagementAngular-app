import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Column} from "../../../components/list-view/list-view.component";
import {DatePipe} from "@angular/common";
import {DataLinkTransfertService} from "../../../../services/dataLinkTransfert/Data-link-transfert.service";
import {AppDepenseService} from "../../../../services/depenseService/app-depense.service";
import {DepensesDto} from "../../../../tm-api/src-api/models/depenses-dto";
import {ViewCatDialogComponent} from "../../../components/view-cat-dialog/view-cat-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SaveDepenseDialogComponent} from "../../../components/save-depense-dialog/save-depense-dialog.component";
import {UtilisateurDto} from "../../../../tm-api/src-api/models/utilisateur-dto";
import {FilterCategoriesService} from "../../../../services/filterCategorieService/filter-categories.service";
import {CategoriesSearchDto, ContextCategorie} from "../../../../tm-api/src-api/models/categories-search-dto";


@Component({
  selector: 'app-depense-page',
  templateUrl: './depense-page.component.html',
  styleUrls: ['./depense-page.component.scss']
})
export class DepensePageComponent implements OnInit{

  listeVente: DepensesDto[] =[];
  // listeVente: Observable<DepensesDto[]> | undefined;
  permission: Array<string> = [];
  display=false;
  filterValue:string = '';
  columns:Array<Column> = [
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
  utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);

  constructor(private dataLinkTransfer: DataLinkTransfertService,
              private depenseService:AppDepenseService,
              private filterCatService:FilterCategoriesService,
              private dialog: MatDialog,
              @Inject(LOCALE_ID) private locale: string,) {

    this.findAllDepenses();
  }

  private getPermissions(){

    this.utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }

  openDialogSave() {

    this.dialog.open(SaveDepenseDialogComponent, {
      height: '75%',
      width: '90%',
      disableClose:false,
      data: {

      },
    }).afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAllDepenses();
        }
      }
    );
  }

  ngOnInit(): void {

    this.getPermissions();
    this.dataLinkTransfer.name.subscribe(value => this.filterValue = value)
  }

  filter($event: CategoriesSearchDto) {
    this.display = false;
    if (this.permission.includes('DEPENSE: FILTRER')){
      this.filterCatService.filterCategories($event, ContextCategorie.DEPENSE).subscribe(
        value => {
          this.listeVente = value;
          this.display = true;
        })
    }

  }

  findAllDepenses() {
    this.display = false
    if (this.permission.includes('DEPENSE: LIRE') || this.permission.includes('DEPENSE: FILTRER')){
      if (this.voirTout){
        this.filterCatService.filterCategories({date1:new Date(new Date().setHours(0, 0, 0, 0)).toISOString(), date2:new Date(new Date().setHours(23, 59, 59, 999)).toISOString()}, ContextCategorie.DEPENSE).subscribe(
          value => {
            this.listeVente = value;
            this.display = true;
          });
      }else {
        this.filterCatService.filterCategories({createdBy:this.utilisateurDto.nom + ' '+this.utilisateurDto.prenom, date1:new Date(new Date().setHours(0, 0, 0, 0)).toISOString(), date2:new Date(new Date().setHours(23, 59, 59, 999)).toISOString()}, ContextCategorie.DEPENSE).subscribe(
          value => {
            this.listeVente = value;
            this.display = true;
          });
      }
    }
  }

  opendoalogCategorie() {

    this.dialog.open(ViewCatDialogComponent, {
      height: '75%',
      width: '90%',
      disableClose:false,
      data: {
        type:'depense'
      },
    })
  }

  protected readonly ContextCategorie = ContextCategorie;
}
