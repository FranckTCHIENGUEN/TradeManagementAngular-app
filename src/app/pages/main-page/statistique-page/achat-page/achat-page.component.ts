import { Component } from '@angular/core';
import {objetFiltreStat} from "../../../../components/filtre-stat/filtre-stat.component";

@Component({
  selector: 'app-achat-page',
  templateUrl: './achat-page.component.html',
  styleUrls: ['./achat-page.component.scss']
})
export class AchatPageComponent {

  callApi($event: objetFiltreStat) {
    alert($event.annee1)
    alert($event.annee2)
    alert($event.isMois)
    alert($event.isAnnee)
  }
}
