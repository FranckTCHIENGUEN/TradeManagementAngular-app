import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";

// const moment = _rollupMoment || _moment;

export const YEAR_MODE_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
export interface objetFiltreStat{
  isAnnee:boolean,
  isMois:boolean,
  annee1:number ,
  annee2:number | null,
  mois?:number| null
}
@Component({
  selector: 'app-filtre-stat',
  templateUrl: './filtre-stat.component.html',
  styleUrls: ['./filtre-stat.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FiltreStatComponent),
      multi: true,
    },
  ],
})
export class FiltreStatComponent {

  saveForm = this.formBuilder.group({
    isMois:[false,[
    ]],
    isAnnee:[false,
    ],
    annee1:[0,[
    ]],
    annee2:[null,
    ],
    mois:[null,
    ],
  })

  @Output() objetFiltre = new EventEmitter<objetFiltreStat>();
  year:Array<number>=[];

  month:Array<any>=[
    {nom:"JANVIER", numero:1} ,
    {nom:"FEVRIER", numero:2} ,
    {nom:"MARS", numero:3} ,
    {nom:"AVRIL", numero:4} ,
    {nom:"MAI", numero:5} ,
    {nom:"JUIN", numero:6} ,
    {nom:"JUILLET", numero:7} ,
    {nom:"AOUT", numero:8} ,
    {nom:"SEPTEMBRE", numero:9} ,
    {nom:"OCTOBRE", numero:10} ,
    {nom:"NOVEMBRE", numero:11} ,
    {nom:"DECEMBRE", numero:12}
  ];

  @Input() typeFiltre: string='';
  constructor(private formBuilder:FormBuilder,) {
    let start=2020;
    let end = new Date().getFullYear();
    let j=end-start;
    this.year.push(start);

    for (let i = 0; i < j; i++) {
      start++
      this.year.push(start)
    }
  }

  formSubmit(){

    let objet:objetFiltreStat={
      annee1:this.saveForm.controls.annee1.value as number,
      annee2:this.saveForm.controls.annee2.value as number | null,
      isAnnee:this.saveForm.controls.isAnnee.value as boolean,
      mois:this.saveForm.controls.mois.value as number | null,
      isMois:this.saveForm.controls.isMois.value as boolean
    }
    this.objetFiltre.emit(objet);
  }

}
