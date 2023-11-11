import {Component} from '@angular/core';
import {AppStatService} from "../../../../../services/statSservice/app-stat.service";
import {objetFiltreStat} from "../../../../components/filtre-stat/filtre-stat.component";
import {EtatFinancier} from "../../../../../tm-api/src-api/models/etat-financier";

@Component({
  selector: 'app-etat-financier-page',
  templateUrl: './etat-financier-page.component.html',
  styleUrls: ['./etat-financier-page.component.scss']
})
export class EtatFinancierPageComponent {

  etatfinancier:EtatFinancier = {};
  private _filtre:objetFiltreStat = {annee1: 0, annee2: 0, isAnnee: false, isMois: false};


  get filtre(): objetFiltreStat {
    return this._filtre;
  }

  constructor(private statService:AppStatService) {
  }

  callApi($event: objetFiltreStat) {
    this._filtre = $event;
    if ($event.isMois==true && $event.isAnnee==true){
      this.statService.getEtatFinancierMonthYear($event.mois as number, $event.annee1 as number).subscribe(
        value => {
          this.etatfinancier=value
        }
      )
    }
    if ($event.isMois==false && $event.isAnnee==true){
      this.statService.getEtatFinancierYearBetwenn($event.annee1 as number,$event.annee2 as number).subscribe(
        value =>{
          this.etatfinancier=value;
        }
      )
    }
  }
}
