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

import { GroupeClientDto } from '../models/groupe-client-dto';


/**
 * API Groupe client
 */
@Injectable({
  providedIn: 'root',
})
export class GroupeClientService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation removeClient
   */
  static readonly RemoveClientPath = '/tradeManagement/v1/groupeclientremove-client/{idGroupe}';

  /**
   * rechercher un groupe client.
   *
   * cette methode permet de rechercher la liste des groupe clients elle retourne la liste de tous les groupe clients
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  removeClient$Response(params: {
    idGroupe: number;
    body: Array<number>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GroupeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupeClientService.RemoveClientPath, 'put');
    if (params) {
      rb.path('idGroupe', params.idGroupe, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupeClientDto>;
      })
    );
  }

  /**
   * rechercher un groupe client.
   *
   * cette methode permet de rechercher la liste des groupe clients elle retourne la liste de tous les groupe clients
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  removeClient(params: {
    idGroupe: number;
    body: Array<number>
  },
  context?: HttpContext

): Observable<GroupeClientDto> {

    return this.removeClient$Response(params,context).pipe(
      map((r: StrictHttpResponse<GroupeClientDto>) => r.body as GroupeClientDto)
    );
  }

  /**
   * Path part for operation addClient
   */
  static readonly AddClientPath = '/tradeManagement/v1/groupeclientadd-client/{idGroupe}';

  /**
   * rechercher un groupe client.
   *
   * cette methode permet de rechercher la liste des groupe clients elle retourne la liste de tous les groupe clients
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addClient$Response(params: {
    idGroupe: number;
    body: Array<number>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GroupeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupeClientService.AddClientPath, 'put');
    if (params) {
      rb.path('idGroupe', params.idGroupe, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupeClientDto>;
      })
    );
  }

  /**
   * rechercher un groupe client.
   *
   * cette methode permet de rechercher la liste des groupe clients elle retourne la liste de tous les groupe clients
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addClient(params: {
    idGroupe: number;
    body: Array<number>
  },
  context?: HttpContext

): Observable<GroupeClientDto> {

    return this.addClient$Response(params,context).pipe(
      map((r: StrictHttpResponse<GroupeClientDto>) => r.body as GroupeClientDto)
    );
  }

  /**
   * Path part for operation save5
   */
  static readonly Save5Path = '/tradeManagement/v1/groupeclient/';

  /**
   * enregistrer un groupe client.
   *
   * cette methode permet de enregistrer un groupe client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5$Response(params: {
    body: GroupeClientDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GroupeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupeClientService.Save5Path, 'post');
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
        return r as StrictHttpResponse<GroupeClientDto>;
      })
    );
  }

  /**
   * enregistrer un groupe client.
   *
   * cette methode permet de enregistrer un groupe client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5(params: {
    body: GroupeClientDto
  },
  context?: HttpContext

): Observable<GroupeClientDto> {

    return this.save5$Response(params,context).pipe(
      map((r: StrictHttpResponse<GroupeClientDto>) => r.body as GroupeClientDto)
    );
  }

  /**
   * Path part for operation findAll6
   */
  static readonly FindAll6Path = '/tradeManagement/v1/groupeclient/{withDetails}';

  /**
   * rechercher un groupe client.
   *
   * cette methode permet de rechercher la liste des groupe clients elle retourne la liste de tous les groupe clients
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll6$Response(params: {
    withDetails: boolean;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GroupeClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GroupeClientService.FindAll6Path, 'get');
    if (params) {
      rb.path('withDetails', params.withDetails, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GroupeClientDto>>;
      })
    );
  }

  /**
   * rechercher un groupe client.
   *
   * cette methode permet de rechercher la liste des groupe clients elle retourne la liste de tous les groupe clients
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll6(params: {
    withDetails: boolean;
  },
  context?: HttpContext

): Observable<Array<GroupeClientDto>> {

    return this.findAll6$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GroupeClientDto>>) => r.body as Array<GroupeClientDto>)
    );
  }

  /**
   * Path part for operation findByName
   */
  static readonly FindByNamePath = '/tradeManagement/v1/groupeclient/nom/{nom}';

  /**
   * rechercher un groupe client.
   *
   * cette methode permet de rechercher un groupe client par son nom
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByName$Response(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GroupeClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GroupeClientService.FindByNamePath, 'get');
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
        return r as StrictHttpResponse<Array<GroupeClientDto>>;
      })
    );
  }

  /**
   * rechercher un groupe client.
   *
   * cette methode permet de rechercher un groupe client par son nom
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByName(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<Array<GroupeClientDto>> {

    return this.findByName$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GroupeClientDto>>) => r.body as Array<GroupeClientDto>)
    );
  }

  /**
   * Path part for operation findById6
   */
  static readonly FindById6Path = '/tradeManagement/v1/groupeclient/id/{id}';

  /**
   * rechercher un groupe.
   *
   * cette methode permet de rechercher un groupe par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GroupeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupeClientService.FindById6Path, 'get');
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
        return r as StrictHttpResponse<GroupeClientDto>;
      })
    );
  }

  /**
   * rechercher un groupe.
   *
   * cette methode permet de rechercher un groupe par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6(params: {
    id: number;
  },
  context?: HttpContext

): Observable<GroupeClientDto> {

    return this.findById6$Response(params,context).pipe(
      map((r: StrictHttpResponse<GroupeClientDto>) => r.body as GroupeClientDto)
    );
  }

  /**
   * Path part for operation delete6
   */
  static readonly Delete6Path = '/tradeManagement/v1/groupeclient/{id}';

  /**
   * supprimer un groupe client.
   *
   * cette methode permet de supprimer un groupe client par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete6()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GroupeClientService.Delete6Path, 'delete');
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
   * supprimer un groupe client.
   *
   * cette methode permet de supprimer un groupe client par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete6$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
