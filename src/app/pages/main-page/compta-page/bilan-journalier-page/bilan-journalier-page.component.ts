import {Component} from '@angular/core';

@Component({
    selector: 'app-bilan-journalier-page',
    templateUrl: './bilan-journalier-page.component.html',
    styleUrls: ['./bilan-journalier-page.component.scss'],
    standalone: false
})
export class BilanJournalierPageComponent {

  date1 = '';
  date2 = '';

  constructor() {

    this.date1 = new Date(new Date().setHours(0, 0, 0, 0)).toISOString();
    this.date2 = new Date(new Date().setHours(23, 59, 59, 999)).toISOString();

    // let pipe = new DatePipe('fr-FR');
    //
    // let dau = new Date().getDate() + 1;
    // let year = new Date().getFullYear();
    // let month = new Date().getMonth()+1;
    // this.date1 = new Date(pipe.transform(new Date(),'yyyy-MM-dd') as string).toISOString() ;
    // this.date2 =new Date(year,month,dau).toISOString() ;
  }



}
