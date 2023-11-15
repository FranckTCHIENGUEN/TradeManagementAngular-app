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

import { CategorieDepenseDto } from '../models/categorie-depense-dto';


/**
 * API categorie depense
 */
@Injectable({
  providedIn: 'root',
})
export class CategorieDepenseService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save12
   */
  static readonly Save12Path = '/tradeManagement/v1/categories-depense/create';

  /**
   * enregistrer une categorie.
   *
   * cette methode permet d'enregistrer ou de modifier une categorie
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save12()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save12$Response(params: {
    body: CategorieDepenseDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategorieDepenseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieDepenseService.Save12Path, 'post');
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
        return r as StrictHttpResponse<CategorieDepenseDto>;
      })
    );
  }

  /**
   * enregistrer une categorie.
   *
   * cette methode permet d'enregistrer ou de modifier une categorie
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save12$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save12(params: {
    body: CategorieDepenseDto
  },
  context?: HttpContext

): Observable<CategorieDepenseDto> {

    return this.save12$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategorieDepenseDto>) => r.body as CategorieDepenseDto)
    );
  }

  /**
   * Path part for operation findByNom7
   */
  static readonly FindByNom7Path = '/tradeManagement/v1/categories-depense/find/nom/{nom}';

  /**
   * rechercher une categorie.
   *
   * cette methode permet de rechercher une categorie par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByNom7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom7$Response(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategorieDepenseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieDepenseService.FindByNom7Path, 'get');
    if (params) {
      rb.path('nom', params.nom, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategorieDepenseDto>;
      })
    );
  }

  /**
   * rechercher une categorie.
   *
   * cette methode permet de rechercher une categorie par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByNom7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom7(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<CategorieDepenseDto> {

    return this.findByNom7$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategorieDepenseDto>) => r.body as CategorieDepenseDto)
    );
  }

  /**
   * Path part for operation findById14
   */
  static readonly FindById14Path = '/tradeManagement/v1/categories-depense/find/id/{id}';

  /**
   * rechercher une categorie.
   *
   * cette methode permet de rechercher une categorie par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById14()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById14$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategorieDepenseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieDepenseService.FindById14Path, 'get');
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
        return r as StrictHttpResponse<CategorieDepenseDto>;
      })
    );
  }

  /**
   * rechercher une categorie.
   *
   * cette methode permet de rechercher une categorie par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById14$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById14(params: {
    id: number;
  },
  context?: HttpContext

): Observable<CategorieDepenseDto> {

    return this.findById14$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategorieDepenseDto>) => r.body as CategorieDepenseDto)
    );
  }

  /**
   * Path part for operation findAll14
   */
  static readonly FindAll14Path = '/tradeManagement/v1/categories-depense/find/all';

  /**
   * obtenir la liste de tous les categories.
   *
   * cette methode permet de rechercher tous les categories
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll14()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll14$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CategorieDepenseDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieDepenseService.FindAll14Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategorieDepenseDto>>;
      })
    );
  }

  /**
   * obtenir la liste de tous les categories.
   *
   * cette methode permet de rechercher tous les categories
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll14$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll14(params?: {
  },
  context?: HttpContext

): Observable<Array<CategorieDepenseDto>> {

    return this.findAll14$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CategorieDepenseDto>>) => r.body as Array<CategorieDepenseDto>)
    );
  }

  /**
   * Path part for operation delete14
   */
  static readonly Delete14Path = '/tradeManagement/v1/categories-depense/delete/{id}';

  /**
   * supprimer un categorie.
   *
   * cette methode permet de supprimer un categorie par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete14()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete14$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieDepenseService.Delete14Path, 'delete');
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
   * supprimer un categorie.
   *
   * cette methode permet de supprimer un categorie par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete14$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete14(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete14$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
