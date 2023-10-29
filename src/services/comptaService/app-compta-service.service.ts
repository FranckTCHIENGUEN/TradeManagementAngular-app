import { Injectable } from '@angular/core';
import {BilanComptableService} from "../../tm-api/src-api/services/bilan-comptable.service";
import {Observable} from "rxjs";
import {ComptaGlobalDto} from "../../tm-api/src-api/models/compta-global-dto";

@Injectable({
  providedIn: 'root'
})
export class AppComptaServiceService {

  constructor(private comptaService:BilanComptableService) { }

  findByDayBetween(date1:string, date2:string):Observable<ComptaGlobalDto>{
    return this.comptaService.findByDateBetween({date1:date1,date2:date2});
  }
  findByDayBetweenAndUser(date1:string, date2:string, user:string):Observable<ComptaGlobalDto>{
    return this.comptaService.findByDateBetweenAndUser({date1:date1,date2:date2, userName:user});
  }
}
