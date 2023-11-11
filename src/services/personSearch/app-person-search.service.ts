import {Injectable} from '@angular/core';
import {FiltreDesPersonnesService} from "../../tm-api/src-api/services/filtre-des-personnes.service";
import {PersonSearchDto} from "../../tm-api/src-api/models/person-search-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppPersonSearchService {

  constructor(private searchPerson:FiltreDesPersonnesService) { }

  fiterPerson(personSearch:PersonSearchDto, context:string):Observable<any>{
    return this.searchPerson.filterPerson({context:context, body:personSearch});
  }
}
