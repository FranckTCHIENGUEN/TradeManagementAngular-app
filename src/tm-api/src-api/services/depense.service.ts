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

import { DepensesDto } from '../models/depenses-dto';


/**
 * API depense
 */
@Injectable({
  providedIn: 'root',
})
export class DepenseService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation saveAll2
   */
  static readonly SaveAll2Path = '/tradeManagement/v1/depenses/save-all/';

  /**
   * enregistrer un role.
   *
   * cette methode permet de enregistrer un role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAll2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAll2$Response(params: {
    body: Array<DepensesDto>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DepensesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DepenseService.SaveAll2Path, 'post');
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
        return r as StrictHttpResponse<Array<DepensesDto>>;
      })
    );
  }

  /**
   * enregistrer un role.
   *
   * cette methode permet de enregistrer un role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveAll2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAll2(params: {
    body: Array<DepensesDto>
  },
  context?: HttpContext

): Observable<Array<DepensesDto>> {

    return this.saveAll2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DepensesDto>>) => r.body as Array<DepensesDto>)
    );
  }

  /**
   * Path part for operation findById8
   */
  static readonly FindById8Path = '/tradeManagement/v1/depenses/{id}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DepensesDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepenseService.FindById8Path, 'get');
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
        return r as StrictHttpResponse<DepensesDto>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8(params: {
    id: number;
  },
  context?: HttpContext

): Observable<DepensesDto> {

    return this.findById8$Response(params,context).pipe(
      map((r: StrictHttpResponse<DepensesDto>) => r.body as DepensesDto)
    );
  }

  /**
   * Path part for operation delete8
   */
  static readonly Delete8Path = '/tradeManagement/v1/depenses/{id}';

  /**
   * supprimer un role.
   *
   * cette methode permet de supprimer un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete8()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepenseService.Delete8Path, 'delete');
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
   * supprimer un role.
   *
   * cette methode permet de supprimer un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete8$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByDateDepenseBetween
   */
  static readonly FindByDateDepenseBetweenPath = '/tradeManagement/v1/depenses/date/{date1}?{date2}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByDateDepenseBetween()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDateDepenseBetween$Response(params: {
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DepensesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DepenseService.FindByDateDepenseBetweenPath, 'get');
    if (params) {
      rb.query('date1', params.date1, {});
      rb.query('date2', params.date2, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DepensesDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByDateDepenseBetween$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDateDepenseBetween(params: {
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<Array<DepensesDto>> {

    return this.findByDateDepenseBetween$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DepensesDto>>) => r.body as Array<DepensesDto>)
    );
  }

  /**
   * Path part for operation findByCode1
   */
  static readonly FindByCode1Path = '/tradeManagement/v1/depenses/code/{code}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1$Response(params: {
    code: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DepensesDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepenseService.FindByCode1Path, 'get');
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
        return r as StrictHttpResponse<DepensesDto>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1(params: {
    code: string;
  },
  context?: HttpContext

): Observable<DepensesDto> {

    return this.findByCode1$Response(params,context).pipe(
      map((r: StrictHttpResponse<DepensesDto>) => r.body as DepensesDto)
    );
  }

  /**
   * Path part for operation findByCategoryId
   */
  static readonly FindByCategoryIdPath = '/tradeManagement/v1/depenses/categorie/{id}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCategoryId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCategoryId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DepensesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DepenseService.FindByCategoryIdPath, 'get');
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
        return r as StrictHttpResponse<Array<DepensesDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCategoryId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCategoryId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<DepensesDto>> {

    return this.findByCategoryId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DepensesDto>>) => r.body as Array<DepensesDto>)
    );
  }

  /**
   * Path part for operation findByCategoryIdAndDateDepenseBetween
   */
  static readonly FindByCategoryIdAndDateDepenseBetweenPath = '/tradeManagement/v1/depenses/categorie-date/{idcategorie}?{date1}?{date2}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCategoryIdAndDateDepenseBetween()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCategoryIdAndDateDepenseBetween$Response(params: {
    idcategorie: number;
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DepensesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DepenseService.FindByCategoryIdAndDateDepenseBetweenPath, 'get');
    if (params) {
      rb.query('idcategorie', params.idcategorie, {});
      rb.query('date1', params.date1, {});
      rb.query('date2', params.date2, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DepensesDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCategoryIdAndDateDepenseBetween$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCategoryIdAndDateDepenseBetween(params: {
    idcategorie: number;
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<Array<DepensesDto>> {

    return this.findByCategoryIdAndDateDepenseBetween$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DepensesDto>>) => r.body as Array<DepensesDto>)
    );
  }

  /**
   * Path part for operation findAll8
   */
  static readonly FindAll8Path = '/tradeManagement/v1/depenses/';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher la liste des roles elle retourne la liste de tous les roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DepensesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DepenseService.FindAll8Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DepensesDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher la liste des roles elle retourne la liste de tous les roles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8(params?: {
  },
  context?: HttpContext

): Observable<Array<DepensesDto>> {

    return this.findAll8$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DepensesDto>>) => r.body as Array<DepensesDto>)
    );
  }

}
