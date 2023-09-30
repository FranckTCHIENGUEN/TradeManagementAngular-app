import { Component } from '@angular/core';

@Component({
  selector: 'app-bilan-journalier-page',
  templateUrl: './bilan-journalier-page.component.html',
  styleUrls: ['./bilan-journalier-page.component.scss']
})
export class BilanJournalierPageComponent {

  date1 = '';
  date2 = '';

  constructor() {

    this.date1 = new Date().toISOString();
    this.date2 = new Date().toISOString();
  }



}
