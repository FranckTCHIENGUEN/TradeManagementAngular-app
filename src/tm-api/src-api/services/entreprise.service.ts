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

import { EntrepriseDto } from '../models/entreprise-dto';


/**
 * API Entreprise
 */
@Injectable({
  providedIn: 'root',
})
export class EntrepriseService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save7
   */
  static readonly Save7Path = '/tradeManagement/v1/entreprises/create';

  /**
   * enregistrer une entreprise.
   *
   * cette methode permet de enregistrer une entreprise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save7()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7$Response(params: {
    body: EntrepriseDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntrepriseDto>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.Save7Path, 'post');
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
        return r as StrictHttpResponse<EntrepriseDto>;
      })
    );
  }

  /**
   * enregistrer une entreprise.
   *
   * cette methode permet de enregistrer une entreprise
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save7$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7(params: {
    body: EntrepriseDto
  },
  context?: HttpContext

): Observable<EntrepriseDto> {

    return this.save7$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntrepriseDto>) => r.body as EntrepriseDto)
    );
  }

  /**
   * Path part for operation changeEmail1
   */
  static readonly ChangeEmail1Path = '/tradeManagement/v1/entreprises/changeEmail/';

  /**
   * changer l'email'.
   *
   * cette methode permet de changer l'email' d'une entreprise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeEmail1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeEmail1$Response(params: {
    body: EntrepriseDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntrepriseDto>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.ChangeEmail1Path, 'post');
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
        return r as StrictHttpResponse<EntrepriseDto>;
      })
    );
  }

  /**
   * changer l'email'.
   *
   * cette methode permet de changer l'email' d'une entreprise
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeEmail1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeEmail1(params: {
    body: EntrepriseDto
  },
  context?: HttpContext

): Observable<EntrepriseDto> {

    return this.changeEmail1$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntrepriseDto>) => r.body as EntrepriseDto)
    );
  }

  /**
   * Path part for operation findAll8
   */
  static readonly FindAll8Path = '/tradeManagement/v1/entreprisesfind/all';

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher la liste des entreprises elle retourne la liste de tous les entreprises
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EntrepriseDto>>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.FindAll8Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher la liste des entreprises elle retourne la liste de tous les entreprises
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8(params?: {
  },
  context?: HttpContext

): Observable<Array<EntrepriseDto>> {

    return this.findAll8$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EntrepriseDto>>) => r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * Path part for operation findByVille2
   */
  static readonly FindByVille2Path = '/tradeManagement/v1/entreprises/find/ville/{ville}';

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher les entreprises resident dans unee ville
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByVille2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByVille2$Response(params: {
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EntrepriseDto>>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.FindByVille2Path, 'get');
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
        return r as StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher les entreprises resident dans unee ville
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByVille2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByVille2(params: {
    ville: string;
  },
  context?: HttpContext

): Observable<Array<EntrepriseDto>> {

    return this.findByVille2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EntrepriseDto>>) => r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * Path part for operation findByPaysAndVille2
   */
  static readonly FindByPaysAndVille2Path = '/tradeManagement/v1/entreprises/find/paysville/{pays}?{ville}';

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher les entreprises resident dans une pays et dans unee ville
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPaysAndVille2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPaysAndVille2$Response(params: {
    pays: string;
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EntrepriseDto>>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.FindByPaysAndVille2Path, 'get');
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
        return r as StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher les entreprises resident dans une pays et dans unee ville
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPaysAndVille2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPaysAndVille2(params: {
    pays: string;
    ville: string;
  },
  context?: HttpContext

): Observable<Array<EntrepriseDto>> {

    return this.findByPaysAndVille2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EntrepriseDto>>) => r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * Path part for operation findByPays2
   */
  static readonly FindByPays2Path = '/tradeManagement/v1/entreprises/find/pays/{pays}';

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher les entreprises resuident dans une pays
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPays2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPays2$Response(params: {
    pays: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EntrepriseDto>>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.FindByPays2Path, 'get');
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
        return r as StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher les entreprises resuident dans une pays
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPays2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPays2(params: {
    pays: string;
  },
  context?: HttpContext

): Observable<Array<EntrepriseDto>> {

    return this.findByPays2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EntrepriseDto>>) => r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * Path part for operation findByNom3
   */
  static readonly FindByNom3Path = '/tradeManagement/v1/entreprises/find/nom/{nom}';

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher les entreprises dont le nom resemble au nom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByNom3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom3$Response(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntrepriseDto>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.FindByNom3Path, 'get');
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
        return r as StrictHttpResponse<EntrepriseDto>;
      })
    );
  }

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher les entreprises dont le nom resemble au nom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByNom3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom3(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<EntrepriseDto> {

    return this.findByNom3$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntrepriseDto>) => r.body as EntrepriseDto)
    );
  }

  /**
   * Path part for operation findById8
   */
  static readonly FindById8Path = '/tradeManagement/v1/entreprises/find/id/{id}';

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher une entreprise par son ID
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

): Observable<StrictHttpResponse<EntrepriseDto>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.FindById8Path, 'get');
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
        return r as StrictHttpResponse<EntrepriseDto>;
      })
    );
  }

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher une entreprise par son ID
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

): Observable<EntrepriseDto> {

    return this.findById8$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntrepriseDto>) => r.body as EntrepriseDto)
    );
  }

  /**
   * Path part for operation findByCodeFiscal
   */
  static readonly FindByCodeFiscalPath = '/tradeManagement/v1/entreprises/find/code/{codeFiscal}';

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher une entreprise par son code fiscal
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCodeFiscal()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeFiscal$Response(params: {
    codeFiscal: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EntrepriseDto>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.FindByCodeFiscalPath, 'get');
    if (params) {
      rb.path('codeFiscal', params.codeFiscal, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntrepriseDto>;
      })
    );
  }

  /**
   * rechercher une entreprise.
   *
   * cette methode permet de rechercher une entreprise par son code fiscal
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCodeFiscal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeFiscal(params: {
    codeFiscal: string;
  },
  context?: HttpContext

): Observable<EntrepriseDto> {

    return this.findByCodeFiscal$Response(params,context).pipe(
      map((r: StrictHttpResponse<EntrepriseDto>) => r.body as EntrepriseDto)
    );
  }

  /**
   * Path part for operation delete8
   */
  static readonly Delete8Path = '/tradeManagement/v1/entreprises/delete/{id}';

  /**
   * supprimer une entreprise.
   *
   * cette methode permet de supprimer une entreprise par son ID
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

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.Delete8Path, 'delete');
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
   * supprimer une entreprise.
   *
   * cette methode permet de supprimer une entreprise par son ID
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

}
