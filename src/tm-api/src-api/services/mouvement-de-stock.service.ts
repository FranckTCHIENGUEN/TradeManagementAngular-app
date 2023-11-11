/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {MvtStkDto} from '../models/mvt-stk-dto';


/**
 * API Mouvement de stock
 */
@Injectable({
  providedIn: 'root',
})
export class MouvementDeStockService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll5
   */
  static readonly FindAll5Path = '/tradeManagement/v1/mouvementdestock/';

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher la liste des mouvement de stocks elle retourne la liste de tous les mouvement de stocks
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<MvtStkDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MouvementDeStockService.FindAll5Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MvtStkDto>>;
      })
    );
  }

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher la liste des mouvement de stocks elle retourne la liste de tous les mouvement de stocks
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5(params?: {
  },
  context?: HttpContext

): Observable<Array<MvtStkDto>> {

    return this.findAll5$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<MvtStkDto>>) => r.body as Array<MvtStkDto>)
    );
  }

  /**
   * Path part for operation save4
   */
  static readonly Save4Path = '/tradeManagement/v1/mouvementdestock/';

  /**
   * enregistrer un mouvement de stock.
   *
   * cette methode permet de enregistrer un mouvement de stock
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4$Response(params?: {
    body?: MvtStkDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MvtStkDto>> {

    const rb = new RequestBuilder(this.rootUrl, MouvementDeStockService.Save4Path, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MvtStkDto>;
      })
    );
  }

  /**
   * enregistrer un mouvement de stock.
   *
   * cette methode permet de enregistrer un mouvement de stock
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4(params?: {
    body?: MvtStkDto
  },
  context?: HttpContext

): Observable<MvtStkDto> {

    return this.save4$Response(params,context).pipe(
      map((r: StrictHttpResponse<MvtStkDto>) => r.body as MvtStkDto)
    );
  }

  /**
   * Path part for operation findById5
   */
  static readonly FindById5Path = '/tradeManagement/v1/mouvementdestock/{id}';

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher un mouvement de stock par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MvtStkDto>> {

    const rb = new RequestBuilder(this.rootUrl, MouvementDeStockService.FindById5Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MvtStkDto>;
      })
    );
  }

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher un mouvement de stock par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5(params: {
    id: number;
  },
  context?: HttpContext

): Observable<MvtStkDto> {

    return this.findById5$Response(params,context).pipe(
      map((r: StrictHttpResponse<MvtStkDto>) => r.body as MvtStkDto)
    );
  }

  /**
   * Path part for operation delete5
   */
  static readonly Delete5Path = '/tradeManagement/v1/mouvementdestock/{id}';

  /**
   * supprimer un mouvement de stock.
   *
   * cette methode permet de supprimer un mouvement de stock par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete5()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MouvementDeStockService.Delete5Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * supprimer un mouvement de stock.
   *
   * cette methode permet de supprimer un mouvement de stock par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete5$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByTypeMvt
   */
  static readonly FindByTypeMvtPath = '/tradeManagement/v1/mouvementdestock/find-typemvt/{typeMouvement}';

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher les mouvement de stocks correspondanta un type de mouvement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByTypeMvt()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByTypeMvt$Response(params: {
    typeMouvement: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<MvtStkDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MouvementDeStockService.FindByTypeMvtPath, 'get');
    if (params) {
      rb.path('typeMouvement', params.typeMouvement, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MvtStkDto>>;
      })
    );
  }

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher les mouvement de stocks correspondanta un type de mouvement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByTypeMvt$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByTypeMvt(params: {
    typeMouvement: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
  },
  context?: HttpContext

): Observable<Array<MvtStkDto>> {

    return this.findByTypeMvt$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<MvtStkDto>>) => r.body as Array<MvtStkDto>)
    );
  }

  /**
   * Path part for operation findStockReelArticle
   */
  static readonly FindStockReelArticlePath = '/tradeManagement/v1/mouvementdestock/find-stock-reel/{idArticle}';

  /**
   * rechercher le stock d'un article.
   *
   * cette methode permet de rechercher la quantite de stock d'un article dont l'id est passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findStockReelArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  findStockReelArticle$Response(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MouvementDeStockService.FindStockReelArticlePath, 'get');
    if (params) {
      rb.path('idArticle', params.idArticle, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * rechercher le stock d'un article.
   *
   * cette methode permet de rechercher la quantite de stock d'un article dont l'id est passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findStockReelArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findStockReelArticle(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.findStockReelArticle$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findByArticleId
   */
  static readonly FindByArticleIdPath = '/tradeManagement/v1/mouvementdestock/find-mvtarticle/{idArticle}';

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher les mouvement de stocks appartenant a l'article dont l'id est passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByArticleId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByArticleId$Response(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<MvtStkDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MouvementDeStockService.FindByArticleIdPath, 'get');
    if (params) {
      rb.path('idArticle', params.idArticle, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MvtStkDto>>;
      })
    );
  }

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher les mouvement de stocks appartenant a l'article dont l'id est passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByArticleId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByArticleId(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<Array<MvtStkDto>> {

    return this.findByArticleId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<MvtStkDto>>) => r.body as Array<MvtStkDto>)
    );
  }

  /**
   * Path part for operation findByDateMvt
   */
  static readonly FindByDateMvtPath = '/tradeManagement/v1/mouvementdestock/find-datemvt/{dateMouvement}';

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher les mouvement de stocks dont la date de mouvement est passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByDateMvt()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDateMvt$Response(params: {
    dateMouvement: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<MvtStkDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MouvementDeStockService.FindByDateMvtPath, 'get');
    if (params) {
      rb.path('dateMouvement', params.dateMouvement, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MvtStkDto>>;
      })
    );
  }

  /**
   * rechercher un mouvement de stock.
   *
   * cette methode permet de rechercher les mouvement de stocks dont la date de mouvement est passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByDateMvt$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDateMvt(params: {
    dateMouvement: string;
  },
  context?: HttpContext

): Observable<Array<MvtStkDto>> {

    return this.findByDateMvt$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<MvtStkDto>>) => r.body as Array<MvtStkDto>)
    );
  }

}
