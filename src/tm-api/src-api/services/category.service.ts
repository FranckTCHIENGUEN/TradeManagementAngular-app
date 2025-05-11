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

import { CategoryDto } from '../models/category-dto';


/**
 * API category
 */
@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save11
   */
  static readonly Save11Path = '/tradeManagement/v1/categories/create';

  /**
   * enregistrer une categorie.
   *
   * cette methode permet d'enregistrer ou de modifier une categorie
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save11()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save11$Response(params: {
    body: CategoryDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.Save11Path, 'post');
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
        return r as StrictHttpResponse<CategoryDto>;
      })
    );
  }

  /**
   * enregistrer une categorie.
   *
   * cette methode permet d'enregistrer ou de modifier une categorie
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save11$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save11(params: {
    body: CategoryDto
  },
  context?: HttpContext

): Observable<CategoryDto> {

    return this.save11$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategoryDto>) => r.body as CategoryDto)
    );
  }

  /**
   * Path part for operation findById13
   */
  static readonly FindById13Path = '/tradeManagement/v1/categories/find/id/{id}';

  /**
   * rechercher une categorie.
   *
   * cette methode permet de rechercher une categorie par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById13()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById13$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.FindById13Path, 'get');
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
        return r as StrictHttpResponse<CategoryDto>;
      })
    );
  }

  /**
   * rechercher une categorie.
   *
   * cette methode permet de rechercher une categorie par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById13(params: {
    id: number;
  },
  context?: HttpContext

): Observable<CategoryDto> {

    return this.findById13$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategoryDto>) => r.body as CategoryDto)
    );
  }

  /**
   * Path part for operation findByNom5
   */
  static readonly FindByNom5Path = '/tradeManagement/v1/categories/find/designation/{nom}';

  /**
   * rechercher les categories.
   *
   * cette methode permet de rechercher les categories par designation semblable. elle retorne une liste de categorie
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByNom5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom5$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CategoryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.FindByNom5Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }

  /**
   * rechercher les categories.
   *
   * cette methode permet de rechercher les categories par designation semblable. elle retorne une liste de categorie
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByNom5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom5(params?: {
  },
  context?: HttpContext

): Observable<Array<CategoryDto>> {

    return this.findByNom5$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>) => r.body as Array<CategoryDto>)
    );
  }

  /**
   * Path part for operation findAll13
   */
  static readonly FindAll13Path = '/tradeManagement/v1/categories/find/all';

  /**
   * obtenir la liste de tous les categories.
   *
   * cette methode permet de rechercher tous les categories
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll13()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll13$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CategoryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.FindAll13Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }

  /**
   * obtenir la liste de tous les categories.
   *
   * cette methode permet de rechercher tous les categories
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll13(params?: {
  },
  context?: HttpContext

): Observable<Array<CategoryDto>> {

    return this.findAll13$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>) => r.body as Array<CategoryDto>)
    );
  }

  /**
   * Path part for operation delete13
   */
  static readonly Delete13Path = '/tradeManagement/v1/categories/delete/{id}';

  /**
   * supprimer un categorie.
   *
   * cette methode permet de supprimer un categorie par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete13()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete13$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.Delete13Path, 'delete');
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
   * To access the full response (for headers, for example), `delete13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete13(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete13$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
