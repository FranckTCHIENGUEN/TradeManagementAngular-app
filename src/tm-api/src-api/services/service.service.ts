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

import { ServiceDto } from '../models/service-dto';
import { StatServiceDto } from '../models/stat-service-dto';


/**
 * API service
 */
@Injectable({
  providedIn: 'root',
})
export class ServiceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save2
   */
  static readonly Save2Path = '/tradeManagement/v1/services/create';

  /**
   * enregistrer un service.
   *
   * cette methode permet d'enregistrer ou de modifier un service
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: {
    body: ServiceDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ServiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, ServiceService.Save2Path, 'post');
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
        return r as StrictHttpResponse<ServiceDto>;
      })
    );
  }

  /**
   * enregistrer un service.
   *
   * cette methode permet d'enregistrer ou de modifier un service
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: {
    body: ServiceDto
  },
  context?: HttpContext

): Observable<ServiceDto> {

    return this.save2$Response(params,context).pipe(
      map((r: StrictHttpResponse<ServiceDto>) => r.body as ServiceDto)
    );
  }

  /**
   * Path part for operation findById2
   */
  static readonly FindById2Path = '/tradeManagement/v1/services/{idService}';

  /**
   * rechercher un service.
   *
   * cette methode permet de rechercher un service par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StatServiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, ServiceService.FindById2Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatServiceDto>;
      })
    );
  }

  /**
   * rechercher un service.
   *
   * cette methode permet de rechercher un service par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params?: {
  },
  context?: HttpContext

): Observable<StatServiceDto> {

    return this.findById2$Response(params,context).pipe(
      map((r: StrictHttpResponse<StatServiceDto>) => r.body as StatServiceDto)
    );
  }

  /**
   * Path part for operation delete2
   */
  static readonly Delete2Path = '/tradeManagement/v1/services/{idService}';

  /**
   * supprimer un service.
   *
   * cette methode permet de supprimer un service par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: {
    idService: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ServiceService.Delete2Path, 'delete');
    if (params) {
      rb.path('idService', params.idService, {});
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
   * supprimer un service.
   *
   * cette methode permet de supprimer un service par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: {
    idService: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete2$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByNom1
   */
  static readonly FindByNom1Path = '/tradeManagement/v1/services/nom/{nom}';

  /**
   * rechercher un service.
   *
   * cette methode permet de rechercher un service par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByNom1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom1$Response(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StatServiceDto>> {

    const rb = new RequestBuilder(this.rootUrl, ServiceService.FindByNom1Path, 'get');
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
        return r as StrictHttpResponse<StatServiceDto>;
      })
    );
  }

  /**
   * rechercher un service.
   *
   * cette methode permet de rechercher un service par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByNom1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom1(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StatServiceDto> {

    return this.findByNom1$Response(params,context).pipe(
      map((r: StrictHttpResponse<StatServiceDto>) => r.body as StatServiceDto)
    );
  }

  /**
   * Path part for operation findAll2
   */
  static readonly FindAll2Path = '/tradeManagement/v1/services/';

  /**
   * obtenir la liste de tous les services.
   *
   * cette methode permet de rechercher tous les services
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<StatServiceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ServiceService.FindAll2Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StatServiceDto>>;
      })
    );
  }

  /**
   * obtenir la liste de tous les services.
   *
   * cette methode permet de rechercher tous les services
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: {
  },
  context?: HttpContext

): Observable<Array<StatServiceDto>> {

    return this.findAll2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<StatServiceDto>>) => r.body as Array<StatServiceDto>)
    );
  }

}
