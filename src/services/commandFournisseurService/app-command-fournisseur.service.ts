import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CommandeFournisseurService} from "../../tm-api/src-api/services/commande-fournisseur.service";
import {CommandeFournisseurDto} from "../../tm-api/src-api/models/commande-fournisseur-dto";
import {LigneCommandeFournisseurDto} from "../../tm-api/src-api/models/ligne-commande-fournisseur-dto";

@Injectable({
  providedIn: 'root'
})
export class AppCommandFournisseurService {

  constructor(private commandeService:CommandeFournisseurService) { }

  save (cat:CommandeFournisseurDto):Observable<CommandeFournisseurDto>{
    return this.commandeService.save8({body:cat});
  }

  findAll ():Observable<Array<CommandeFournisseurDto>>{
    return this.commandeService.findAll10();
  }
  findLigneCommande (id:number):Observable<Array<LigneCommandeFournisseurDto>>{
    return this.commandeService.findLigneCommade1({idCommande:id});
  }

  findById (id:number):Observable<CommandeFournisseurDto>{
    return this.commandeService.findById10({id:id});
  }

  updateEtat (id:number, etat:"EN_PREPARATION" | "RECEPTIONNER" | "VALIDER" | "LIVRER"):Observable<CommandeFournisseurDto>{
    return this.commandeService.updateEtatCommande({idCommande:id, etatCommande:etat});
  }

  delete (id:number){
    return this.commandeService.delete10({id:id});
  }
}
