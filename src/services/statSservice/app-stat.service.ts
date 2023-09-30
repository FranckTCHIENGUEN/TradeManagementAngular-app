import { Injectable } from '@angular/core';
import {StatisqueService} from "../../tm-api/src-api/services/statisque.service";
import {Observable} from "rxjs";
import {EtatFinancier} from "../../tm-api/src-api/models/etat-financier";

@Injectable({
  providedIn: 'root'
})
export class AppStatService {

  constructor(private statService:StatisqueService) { }

  getEtatFinancierYearBetwenn(annee1:number, annee2:number):Observable<EtatFinancier>{
    return this.statService.getEtatFinancierYearBetwenn({annee1:annee1, annee2:annee2});
  }

  getEtatFinancierMonthYear(mois:number, annee:number):Observable<EtatFinancier>{
    return this.statService.getEtatFinancierMonthYear({annee:annee, mois:mois});
  }
}
