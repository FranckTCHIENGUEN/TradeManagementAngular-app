import { Injectable } from '@angular/core';
import {DepenseService} from "../../tm-api/src-api/services/depense.service";
import {Observable} from "rxjs";
import {VenteService} from "../../tm-api/src-api/services/vente.service";
import {VenteDto} from "../../tm-api/src-api/models/vente-dto";
import {LigneCommandeClientDto} from "../../tm-api/src-api/models/ligne-commande-client-dto";
import {LigneVenteDto} from "../../tm-api/src-api/models/ligne-vente-dto";

@Injectable({
  providedIn: 'root'
})
export class AppVenbteServiceService {

  constructor(private VenteService:VenteService) { }

  save (cat:VenteDto):Observable<VenteDto>{
    return this.VenteService.save({body:cat});
  }

  findAll ():Observable<Array<VenteDto>>{
    return this.VenteService.findAll();
  }

  findById (id:number):Observable<VenteDto>{
    return this.VenteService.findById({id:id});
  }
  findLigneVente (id:number):Observable<Array<LigneVenteDto>>{
    return this.VenteService.findLigneCommade({idVente:id});
  }

  delete (id:number){
    return this.VenteService.delete({id:id});
  }
}
