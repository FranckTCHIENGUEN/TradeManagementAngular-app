import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-bilan-journalier-page',
  templateUrl: './bilan-journalier-page.component.html',
  styleUrls: ['./bilan-journalier-page.component.scss']
})
export class BilanJournalierPageComponent {

  date1 = '';
  date2 = '';

  constructor() {
    let pipe = new DatePipe('fr-FR');
    let dau = new Date().getDate() + 1;
    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    this.date1 = new Date(pipe.transform(new Date(),'yyyy-MM-dd') as string).toISOString() ;
    this.date2 =new Date(year,month,dau).toISOString() ;
  }



}
