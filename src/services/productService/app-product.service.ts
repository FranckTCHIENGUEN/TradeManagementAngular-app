import {Injectable} from '@angular/core';
import {ArticleService} from "../../tm-api/src-api/services/article.service";
import {Observable} from "rxjs";
import {ArticleDto} from "../../tm-api/src-api/models/article-dto";

@Injectable({
  providedIn: 'root'
})
export class AppProductService {

  constructor(private produitService:ArticleService) { }

  save (cat:ArticleDto):Observable<ArticleDto>{
    return this.produitService.save13({body:cat});
  }

  findAll ():Observable<Array<ArticleDto>>{
    return this.produitService.findAll15();
  }

  findById (id:number):Observable<ArticleDto>{
    return this.produitService.findById15({id:id});
  }

  delete (id:number){
    return this.produitService.delete15({idArticle:id});
  }
}
