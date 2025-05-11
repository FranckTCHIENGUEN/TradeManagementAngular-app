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

import { ClientDto } from '../models/client-dto';


/**
 * API Client
 */
@Injectable({
  providedIn: 'root',
})
export class ClientService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save10
   */
  static readonly Save10Path = '/tradeManagement/v1/clients/create';

  /**
   * enregistrer un client.
   *
   * cette methode permet de enregistrer un client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save10()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save10$Response(params: {
    body: ClientDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.Save10Path, 'post');
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
        return r as StrictHttpResponse<ClientDto>;
      })
    );
  }

  /**
   * enregistrer un client.
   *
   * cette methode permet de enregistrer un client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save10$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save10(params: {
    body: ClientDto
  },
  context?: HttpContext

): Observable<ClientDto> {

    return this.save10$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClientDto>) => r.body as ClientDto)
    );
  }

  /**
   * Path part for operation saveAll3
   */
  static readonly SaveAll3Path = '/tradeManagement/v1/clients/create-all';

  /**
   * enregistrer plusieurs client.
   *
   * cette methode permet de enregistrer un client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAll3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAll3$Response(params: {
    body: Array<ClientDto>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.SaveAll3Path, 'post');
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
        return r as StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }

  /**
   * enregistrer plusieurs client.
   *
   * cette methode permet de enregistrer un client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveAll3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAll3(params: {
    body: Array<ClientDto>
  },
  context?: HttpContext

): Observable<Array<ClientDto>> {

    return this.saveAll3$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>) => r.body as Array<ClientDto>)
    );
  }

  /**
   * Path part for operation findById12
   */
  static readonly FindById12Path = '/tradeManagement/v1/clients/{id}';

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher un client par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById12()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById12$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.FindById12Path, 'get');
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
        return r as StrictHttpResponse<ClientDto>;
      })
    );
  }

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher un client par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById12$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById12(params: {
    id: number;
  },
  context?: HttpContext

): Observable<ClientDto> {

    return this.findById12$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClientDto>) => r.body as ClientDto)
    );
  }

  /**
   * Path part for operation delete12
   */
  static readonly Delete12Path = '/tradeManagement/v1/clients/{id}';

  /**
   * supprimer un client.
   *
   * cette methode permet de supprimer un client par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete12()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete12$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.Delete12Path, 'delete');
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
   * supprimer un client.
   *
   * cette methode permet de supprimer un client par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete12$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete12(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete12$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByVille3
   */
  static readonly FindByVille3Path = '/tradeManagement/v1/clients/ville/{ville}';

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients resident dans une ville
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByVille3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByVille3$Response(params: {
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.FindByVille3Path, 'get');
    if (params) {
      rb.path('ville', params.ville, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients resident dans une ville
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByVille3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByVille3(params: {
    ville: string;
  },
  context?: HttpContext

): Observable<Array<ClientDto>> {

    return this.findByVille3$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>) => r.body as Array<ClientDto>)
    );
  }

  /**
   * Path part for operation findByPrenom2
   */
  static readonly FindByPrenom2Path = '/tradeManagement/v1/clients/prenom/{prenom}';

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients dont le prenom resemble au prenom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPrenom2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenom2$Response(params: {
    prenom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.FindByPrenom2Path, 'get');
    if (params) {
      rb.path('prenom', params.prenom, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients dont le prenom resemble au prenom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPrenom2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenom2(params: {
    prenom: string;
  },
  context?: HttpContext

): Observable<Array<ClientDto>> {

    return this.findByPrenom2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>) => r.body as Array<ClientDto>)
    );
  }

  /**
   * Path part for operation findByPays3
   */
  static readonly FindByPays3Path = '/tradeManagement/v1/clients/pays/{pays}';

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients resuident dans un pays
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPays3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPays3$Response(params: {
    pays: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.FindByPays3Path, 'get');
    if (params) {
      rb.path('pays', params.pays, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients resuident dans un pays
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPays3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPays3(params: {
    pays: string;
  },
  context?: HttpContext

): Observable<Array<ClientDto>> {

    return this.findByPays3$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>) => r.body as Array<ClientDto>)
    );
  }

  /**
   * Path part for operation findByPaysAndVille3
   */
  static readonly FindByPaysAndVille3Path = '/tradeManagement/v1/clients/pays-ville/{pays}?{ville}';

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients resident dans un pays et dans une ville
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPaysAndVille3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPaysAndVille3$Response(params: {
    pays: string;
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.FindByPaysAndVille3Path, 'get');
    if (params) {
      rb.path('pays', params.pays, {});
      rb.path('ville', params.ville, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients resident dans un pays et dans une ville
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPaysAndVille3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPaysAndVille3(params: {
    pays: string;
    ville: string;
  },
  context?: HttpContext

): Observable<Array<ClientDto>> {

    return this.findByPaysAndVille3$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>) => r.body as Array<ClientDto>)
    );
  }

  /**
   * Path part for operation findByNom4
   */
  static readonly FindByNom4Path = '/tradeManagement/v1/clients/nom/{nom}';

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients dont le nom resemble au nom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByNom4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom4$Response(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.FindByNom4Path, 'get');
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
        return r as StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher les clients dont le nom resemble au nom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByNom4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom4(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<Array<ClientDto>> {

    return this.findByNom4$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>) => r.body as Array<ClientDto>)
    );
  }

  /**
   * Path part for operation findAll12
   */
  static readonly FindAll12Path = '/tradeManagement/v1/clients/';

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher la liste des clients elle retourne la liste de tous les clients
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll12()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll12$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.FindAll12Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }

  /**
   * rechercher un client.
   *
   * cette methode permet de rechercher la liste des clients elle retourne la liste de tous les clients
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll12$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll12(params?: {
  },
  context?: HttpContext

): Observable<Array<ClientDto>> {

    return this.findAll12$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>) => r.body as Array<ClientDto>)
    );
  }

}
