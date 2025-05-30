import {Injectable} from '@angular/core';
import {FournisseurDto} from "../../tm-api/src-api/models/fournisseur-dto";
import {Observable} from "rxjs";
import {FournisseurService} from "../../tm-api/src-api/services/fournisseur.service";

@Injectable({
  providedIn: 'root'
})
export class AppFournisseurService {

  constructor(private fournisseurService:FournisseurService) { }

  save(fournisseur:FournisseurDto):Observable<FournisseurDto>{
    return this.fournisseurService.save6({body:fournisseur})
  }

  findAll():Observable<Array<FournisseurDto>>{
    return this.fournisseurService.findAll7();
  }
  delete(id:number){
    return this.fournisseurService.delete7({id:id})
  }
}
