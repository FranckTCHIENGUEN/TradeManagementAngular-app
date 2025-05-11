import {Injectable} from '@angular/core';
import {CategorieServiceService} from "../../tm-api/src-api/services/categorie-service.service";
import {CategoriServiceDto} from "../../tm-api/src-api/models/categori-service-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppCatergorieServiceService {

  constructor(private catService:CategorieServiceService) { }

  save (cat:CategoriServiceDto):Observable<CategoriServiceDto>{
    return this.catService.save12({body:cat});
  }

  findAll ():Observable<Array<CategoriServiceDto>>{
    return this.catService.findAll14();
  }

  findById (id:number):Observable<CategoriServiceDto>{
    return this.catService.findById14({id:id});
  }

  delete (id:number){
    return this.catService.delete14({id:id});
  }

}
