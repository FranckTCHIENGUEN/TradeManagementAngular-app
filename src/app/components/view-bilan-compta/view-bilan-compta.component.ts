import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppComptaServiceService} from "../../../services/comptaService/app-compta-service.service";
import {ComptaGlobalDto} from "../../../tm-api/src-api/models/compta-global-dto";
import {Column} from "../list-view/list-view.component";
import {DatePipe} from "@angular/common";
import {BillanComptableDto} from "../../../tm-api/src-api/models/billan-comptable-dto";

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
      columnDef: 'Avance sur Depense',
      header: 'Avance sur Dep',
      cell: (element: BillanComptableDto) => `${element.avanceDepense}`,
    },
    {
      columnDef: 'Rembourssement',
      header: 'Remb',
      cell: (element: BillanComptableDto) => `${element.rembourssement}`,
    },
    {
      columnDef: 'Rembourssement sur depense',
      header: 'Remb sur dep',
      cell: (element: BillanComptableDto) => `${element.rembourssementDepense}`,
    },
    {
      columnDef: 'Reste a payer',
      header: 'Reste a payer',
      cell: (element: BillanComptableDto) => `${element.resteApayer}`,
    },
    {
      columnDef: ' Reste a payer sur depense',
      header: ' Reste a payer sur dep',
      cell: (element: BillanComptableDto) => `${element.resteApayerDepense}`,
    },
  ];
  isChecked = true;

  constructor(private bilanComptaService:AppComptaServiceService) {
  }
  ngOnInit(): void {

    this.find();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.find();
  }

  private find(){
    this.bilanComptaService.findByDayBetween(this.date1, this.date2).subscribe(
      value => {
        this.bilan=value;
        this.detail=this.bilan.billanComptableDtos;
        this.display=true;
      }
    )
  }

}
