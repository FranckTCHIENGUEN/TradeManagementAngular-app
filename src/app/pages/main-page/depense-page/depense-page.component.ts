import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {VenteDto} from "../../../../tm-api/src-api/models/vente-dto";
import {Column} from "../../../components/list-view/list-view.component";
import {DatePipe} from "@angular/common";
import {DataLinkTransfertService} from "../../../../services/dataLinkTransfert/Data-link-transfert.service";
import {AppDepenseService} from "../../../../services/depenseService/app-depense.service";
import {DepensesDto} from "../../../../tm-api/src-api/models/depenses-dto";
import {ViewCatDialogComponent} from "../../../components/view-cat-dialog/view-cat-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SaveProductDialogComponent} from "../../../components/save-product-dialog/save-product-dialog.component";
import {SaveDepenseDialogComponent} from "../../../components/save-depense-dialog/save-depense-dialog.component";

@Component({
  selector: 'app-depense-page',
  templateUrl: './depense-page.component.html',
  styleUrls: ['./depense-page.component.scss']
})
export class DepensePageComponent implements OnInit{

  listeVente:Array<DepensesDto> = [];

  display=false;
  filterValue:string = '';
  columns:Array<Column> = [
    {
      columnDef: 'date',
      header: 'Date depense',
      cell: (element: DepensesDto) =>{
        let pipe = new DatePipe('fr-FR');

        const time = pipe.transform(element.dateDepense, 'mediumTime', 'UTC+1');

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
  // columsName = this.columns.map(c => c.columnDef);

  constructor(private dataLinkTransfer: DataLinkTransfertService,
              private depenseService:AppDepenseService,
              private dialog: MatDialog,
              @Inject(LOCALE_ID) private locale: string,) {


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

          this.ngOnInit();
        }
        this.display = true
      }
    );
  }

  ngOnInit(): void {

    this.dataLinkTransfer.name.subscribe(value => this.filterValue = value)
    this.findAllDepenses();

  }

  findAllDepenses() {
    this.display = false
    this.depenseService.findAll().subscribe(
      value => {
        this.listeVente = value;
        this.display = true
      });
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

}
