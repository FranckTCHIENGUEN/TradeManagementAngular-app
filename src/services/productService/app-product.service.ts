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
    return this.produitService.save14({body:cat});
  }

  findAll ():Observable<Array<ArticleDto>>{
    return this.produitService.findAll16();
  }

  findById (id:number):Observable<ArticleDto>{
    return this.produitService.findById16({id:id});
  }

  delete (id:number){
    return this.produitService.delete16({idArticle:id});
  }
}
