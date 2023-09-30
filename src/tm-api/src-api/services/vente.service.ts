/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { HistoriqueArticleDto } from '../models/historique-article-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
import { VenteDto } from '../models/vente-dto';


/**
 * API Vente
 */
@Injectable({
  providedIn: 'root',
})
export class VenteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll
   */
  static readonly FindAllPath = '/tradeManagement/v1/ventes/';

  /**
   * obtenir la liste de toutes les ventes.
   *
   * cette methode permet de rechercher tous les ventes
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<VenteDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VenteService.FindAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VenteDto>>;
      })
    );
  }

  /**
   * obtenir la liste de toutes les ventes.
   *
   * cette methode permet de rechercher tous les ventes
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: {
  },
  context?: HttpContext

): Observable<Array<VenteDto>> {

    return this.findAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<VenteDto>>) => r.body as Array<VenteDto>)
    );
  }

  /**
   * Path part for operation save
   */
  static readonly SavePath = '/tradeManagement/v1/ventes/';

  /**
   * enregistrer une vente.
   *
   * cette methode permet d'enregistrer ou de modifier une vente
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: {
    body: VenteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<VenteDto>> {

    const rb = new RequestBuilder(this.rootUrl, VenteService.SavePath, 'post');
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
        return r as StrictHttpResponse<VenteDto>;
      })
    );
  }

  /**
   * enregistrer une vente.
   *
   * cette methode permet d'enregistrer ou de modifier une vente
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: {
    body: VenteDto
  },
  context?: HttpContext

): Observable<VenteDto> {

    return this.save$Response(params,context).pipe(
      map((r: StrictHttpResponse<VenteDto>) => r.body as VenteDto)
    );
  }

  /**
   * Path part for operation findById
   */
  static readonly FindByIdPath = '/tradeManagement/v1/ventes/{id}';

  /**
   * rechercher une vente.
   *
   * cette methode permet de rechercher une vente par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<VenteDto>> {

    const rb = new RequestBuilder(this.rootUrl, VenteService.FindByIdPath, 'get');
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
        return r as StrictHttpResponse<VenteDto>;
      })
    );
  }

  /**
   * rechercher une vente.
   *
   * cette methode permet de rechercher une vente par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    id: number;
  },
  context?: HttpContext

): Observable<VenteDto> {

    return this.findById$Response(params,context).pipe(
      map((r: StrictHttpResponse<VenteDto>) => r.body as VenteDto)
    );
  }

  /**
   * Path part for operation delete
   */
  static readonly DeletePath = '/tradeManagement/v1/ventes/{id}';

  /**
   * supprimer une vente.
   *
   * cette methode permet de supprimer un vente par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, VenteService.DeletePath, 'delete');
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
   * supprimer une vente.
   *
   * cette methode permet de supprimer un vente par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByLigneVentesArticleId
   */
  static readonly FindByLigneVentesArticleIdPath = '/tradeManagement/v1/ventes/find-ventearticle/{idArticle}';

  /**
   * rechercher l'historique des ventes d'un article.
   *
   * cette methode permet de rechercher l'historique des ventes d'un article par l'id de l'article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByLigneVentesArticleId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByLigneVentesArticleId$Response(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<HistoriqueArticleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VenteService.FindByLigneVentesArticleIdPath, 'get');
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
        return r as StrictHttpResponse<Array<HistoriqueArticleDto>>;
      })
    );
  }

  /**
   * rechercher l'historique des ventes d'un article.
   *
   * cette methode permet de rechercher l'historique des ventes d'un article par l'id de l'article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByLigneVentesArticleId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByLigneVentesArticleId(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<Array<HistoriqueArticleDto>> {

    return this.findByLigneVentesArticleId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<HistoriqueArticleDto>>) => r.body as Array<HistoriqueArticleDto>)
    );
  }

  /**
   * Path part for operation findLigneCommade
   */
  static readonly FindLigneCommadePath = '/tradeManagement/v1/ventes/find-ligvente/{idVente}';

  /**
   * rechercher l'historique des ventes d'un article.
   *
   * cette methode permet de rechercher l'historique des ventes d'un article par l'id de l'article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findLigneCommade()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLigneCommade$Response(params: {
    idVente: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LigneVenteDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VenteService.FindLigneCommadePath, 'get');
    if (params) {
      rb.path('idVente', params.idVente, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }

  /**
   * rechercher l'historique des ventes d'un article.
   *
   * cette methode permet de rechercher l'historique des ventes d'un article par l'id de l'article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findLigneCommade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLigneCommade(params: {
    idVente: number;
  },
  context?: HttpContext

): Observable<Array<LigneVenteDto>> {

    return this.findLigneCommade$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LigneVenteDto>>) => r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * Path part for operation findByCode
   */
  static readonly FindByCodePath = '/tradeManagement/v1/ventes/code/{code}';

  /**
   * rechercher une vente.
   *
   * cette methode permet de rechercher une vente par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode$Response(params: {
    code: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<VenteDto>> {

    const rb = new RequestBuilder(this.rootUrl, VenteService.FindByCodePath, 'get');
    if (params) {
      rb.path('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VenteDto>;
      })
    );
  }

  /**
   * rechercher une vente.
   *
   * cette methode permet de rechercher une vente par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode(params: {
    code: string;
  },
  context?: HttpContext

): Observable<VenteDto> {

    return this.findByCode$Response(params,context).pipe(
      map((r: StrictHttpResponse<VenteDto>) => r.body as VenteDto)
    );
  }

}
