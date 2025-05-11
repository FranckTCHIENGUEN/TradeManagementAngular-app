import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CommandeClientService} from "../../tm-api/src-api/services/commande-client.service";
import {CommandeClientDto} from "../../tm-api/src-api/models/commande-client-dto";
import {LigneCommandeClientDto} from "../../tm-api/src-api/models/ligne-commande-client-dto";

@Injectable({
  providedIn: 'root'
})
export class AppCommandClientService {

  constructor(private commandeService:CommandeClientService) { }

  save (cat:CommandeClientDto){
    return this.commandeService.save9({body:cat});
  }

  findAll ():Observable<Array<CommandeClientDto>>{
    return this.commandeService.findAll11();
  }

  findLigneCommande (id:number):Observable<Array<LigneCommandeClientDto>>{
    return this.commandeService.findLigneCommade2({idCommande:id});
  }

  findById (id:number):Observable<CommandeClientDto>{
    return this.commandeService.findById11({id:id});
  }

  updateEtat (id:number, etat:"EN_PREPARATION" | "RECEPTIONNER" | "VALIDER" | "LIVRER"):Observable<CommandeClientDto>{
    return this.commandeService.updateEtatCommande1({idCommande:id, etatCommande:etat});
  }

  delete (id:number){
    return this.commandeService.delete11({id:id});
  }
}
