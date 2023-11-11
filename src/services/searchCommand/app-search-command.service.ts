import {Injectable} from '@angular/core';
import {FiltreCommandeService} from "../../tm-api/src-api/services/filtre-commande.service";
import {CommandSearch} from "../../tm-api/src-api/models/command-search";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppSearchCommandService {

  constructor(private commandSearchService:FiltreCommandeService) { }

  filterCommand(filterSearch:CommandSearch, context:string):Observable<any>{
    return this.commandSearchService.filterCommand({context:context, body:filterSearch});
  }
}
