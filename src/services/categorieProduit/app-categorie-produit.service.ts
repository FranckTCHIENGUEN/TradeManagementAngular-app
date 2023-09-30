import { Injectable } from '@angular/core';
import {CategoryService} from "../../tm-api/src-api/services/category.service";
import {Observable} from "rxjs";
import {CategoryDto} from "../../tm-api/src-api/models/category-dto";

@Injectable({
  providedIn: 'root'
})
export class AppCategorieProduitService {

  constructor(private catService:CategoryService) { }

  save (cat:CategoryDto):Observable<CategoryDto>{
    return this.catService.save10({body:cat});
  }

  findAll ():Observable<Array<CategoryDto>>{
    return this.catService.findAll12();
  }

  findById (id:number):Observable<CategoryDto>{
    return this.catService.findById12({id:id});
  }

  delete (id:number){
    return this.catService.delete12({id:id});
  }
}
