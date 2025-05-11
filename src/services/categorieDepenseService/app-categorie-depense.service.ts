import {Injectable} from '@angular/core';
import {CategorieDepenseService} from "../../tm-api/src-api/services/categorie-depense.service";
import {Observable} from "rxjs";
import {CategorieDepenseDto} from "../../tm-api/src-api/models/categorie-depense-dto";

@Injectable({
  providedIn: 'root'
})
export class AppCategorieDepenseService {

  constructor(private catService:CategorieDepenseService) { }

  save (cat:CategorieDepenseDto):Observable<CategorieDepenseDto>{
    return this.catService.save13({body:cat});
  }

  findAll ():Observable<Array<CategorieDepenseDto>>{
    return this.catService.findAll15();
  }

  findById (id:number):Observable<CategorieDepenseDto>{
    return this.catService.findById15({id:id});
  }

  delete (id:number){
    return this.catService.delete15({id:id});
  }
}
