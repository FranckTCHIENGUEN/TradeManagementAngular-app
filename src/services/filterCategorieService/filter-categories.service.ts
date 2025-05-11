import {Injectable} from '@angular/core';
import {FiltreCommandeService} from "../../tm-api/src-api/services/filtre-commande.service";
import {Observable} from "rxjs";
import {CategoriesSearchDto} from "../../tm-api/src-api/models/categories-search-dto";

@Injectable({
  providedIn: 'root'
})
export class FilterCategoriesService {

  constructor(private commandSearchService:FiltreCommandeService) { }

  filterCategories(filterSearch:CategoriesSearchDto, context:string):Observable<any>{
    return this.commandSearchService.filterCategories({context:context, body:filterSearch});
  }
}
