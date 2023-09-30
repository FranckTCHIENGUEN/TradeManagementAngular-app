import { Injectable } from '@angular/core';
import {PaiementService} from "../../tm-api/src-api/services/paiement.service";
import {PaiementDto} from "../../tm-api/src-api/models/paiement-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppPaiementServiceService {

  constructor(private paiementService:PaiementService) { }

  saveAll(paiement:Array<PaiementDto>):Observable<Array<PaiementDto>>{
    return this.paiementService.saveAll({body:paiement});
  }
  findByObjetAndIdObjet(objet: any, idObjet:number):Observable<Array<PaiementDto>>{
    return this.paiementService.findByObjetAndIdObjet({objet:objet, idObjet:idObjet});
  }
}
