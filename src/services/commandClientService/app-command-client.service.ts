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
    return this.commandeService.save8({body:cat});
  }

  findAll ():Observable<Array<CommandeClientDto>>{
    return this.commandeService.findAll10();
  }

  findLigneCommande (id:number):Observable<Array<LigneCommandeClientDto>>{
    return this.commandeService.findLigneCommade2({idCommande:id});
  }

  findById (id:number):Observable<CommandeClientDto>{
    return this.commandeService.findById10({id:id});
  }

  delete (id:number){
    return this.commandeService.delete10({id:id});
  }
}
