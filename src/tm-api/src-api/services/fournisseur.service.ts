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

import { FournisseurDto } from '../models/fournisseur-dto';


/**
 * API Fournisseur
 */
@Injectable({
  providedIn: 'root',
})
export class FournisseurService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation saveAll1
   */
  static readonly SaveAll1Path = '/tradeManagement/v1/fournisseurs/save-all/';

  /**
   * enregistrer plusieurs fournisseur.
   *
   * cette methode permet de enregistrer un fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAll1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAll1$Response(params: {
    body: Array<FournisseurDto>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FournisseurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.SaveAll1Path, 'post');
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
        return r as StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }

  /**
   * enregistrer plusieurs fournisseur.
   *
   * cette methode permet de enregistrer un fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveAll1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAll1(params: {
    body: Array<FournisseurDto>
  },
  context?: HttpContext

): Observable<Array<FournisseurDto>> {

    return this.saveAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FournisseurDto>>) => r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Path part for operation findAll7
   */
  static readonly FindAll7Path = '/tradeManagement/v1/fournisseurs/';

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher la liste des fournisseurs elle retourne la liste de tous les fournisseurs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FournisseurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.FindAll7Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher la liste des fournisseurs elle retourne la liste de tous les fournisseurs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7(params?: {
  },
  context?: HttpContext

): Observable<Array<FournisseurDto>> {

    return this.findAll7$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FournisseurDto>>) => r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Path part for operation save6
   */
  static readonly Save6Path = '/tradeManagement/v1/fournisseurs/';

  /**
   * enregistrer un fournisseur.
   *
   * cette methode permet de enregistrer un fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save6()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6$Response(params: {
    body: FournisseurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.Save6Path, 'post');
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
        return r as StrictHttpResponse<FournisseurDto>;
      })
    );
  }

  /**
   * enregistrer un fournisseur.
   *
   * cette methode permet de enregistrer un fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save6$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6(params: {
    body: FournisseurDto
  },
  context?: HttpContext

): Observable<FournisseurDto> {

    return this.save6$Response(params,context).pipe(
      map((r: StrictHttpResponse<FournisseurDto>) => r.body as FournisseurDto)
    );
  }

  /**
   * Path part for operation findById7
   */
  static readonly FindById7Path = '/tradeManagement/v1/fournisseurs/{id}';

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher un fournisseur par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.FindById7Path, 'get');
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
        return r as StrictHttpResponse<FournisseurDto>;
      })
    );
  }

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher un fournisseur par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7(params: {
    id: number;
  },
  context?: HttpContext

): Observable<FournisseurDto> {

    return this.findById7$Response(params,context).pipe(
      map((r: StrictHttpResponse<FournisseurDto>) => r.body as FournisseurDto)
    );
  }

  /**
   * Path part for operation delete7
   */
  static readonly Delete7Path = '/tradeManagement/v1/fournisseurs/{id}';

  /**
   * supprimer un fournisseur.
   *
   * cette methode permet de supprimer un fournisseur par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete7()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.Delete7Path, 'delete');
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
   * supprimer un fournisseur.
   *
   * cette methode permet de supprimer un fournisseur par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete7$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByVille1
   */
  static readonly FindByVille1Path = '/tradeManagement/v1/fournisseurs/ville/{ville}';

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs resident dans une ville
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByVille1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByVille1$Response(params: {
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FournisseurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.FindByVille1Path, 'get');
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
        return r as StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs resident dans une ville
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByVille1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByVille1(params: {
    ville: string;
  },
  context?: HttpContext

): Observable<Array<FournisseurDto>> {

    return this.findByVille1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FournisseurDto>>) => r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Path part for operation findByPrenom1
   */
  static readonly FindByPrenom1Path = '/tradeManagement/v1/fournisseurs/prenom/{prenom}';

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs dont le prenom resemble au prenom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPrenom1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenom1$Response(params: {
    prenom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FournisseurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.FindByPrenom1Path, 'get');
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
        return r as StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs dont le prenom resemble au prenom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPrenom1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenom1(params: {
    prenom: string;
  },
  context?: HttpContext

): Observable<Array<FournisseurDto>> {

    return this.findByPrenom1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FournisseurDto>>) => r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Path part for operation findByPays1
   */
  static readonly FindByPays1Path = '/tradeManagement/v1/fournisseurs/pays/{pays}';

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs resuident dans un pays
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPays1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPays1$Response(params: {
    pays: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FournisseurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.FindByPays1Path, 'get');
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
        return r as StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs resuident dans un pays
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPays1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPays1(params: {
    pays: string;
  },
  context?: HttpContext

): Observable<Array<FournisseurDto>> {

    return this.findByPays1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FournisseurDto>>) => r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Path part for operation findByPaysAndVille1
   */
  static readonly FindByPaysAndVille1Path = '/tradeManagement/v1/fournisseurs/pays-ville/{pays}?{ville}';

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs resident dans un pays et dans une ville
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPaysAndVille1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPaysAndVille1$Response(params: {
    pays: string;
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FournisseurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.FindByPaysAndVille1Path, 'get');
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
        return r as StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs resident dans un pays et dans une ville
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPaysAndVille1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPaysAndVille1(params: {
    pays: string;
    ville: string;
  },
  context?: HttpContext

): Observable<Array<FournisseurDto>> {

    return this.findByPaysAndVille1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FournisseurDto>>) => r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Path part for operation findByNom2
   */
  static readonly FindByNom2Path = '/tradeManagement/v1/fournisseurs/nom/{nom}';

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs dont le nom resemble au nom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByNom2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom2$Response(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FournisseurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, FournisseurService.FindByNom2Path, 'get');
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
        return r as StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }

  /**
   * rechercher un fournisseur.
   *
   * cette methode permet de rechercher les fournisseurs dont le nom resemble au nom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByNom2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom2(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<Array<FournisseurDto>> {

    return this.findByNom2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FournisseurDto>>) => r.body as Array<FournisseurDto>)
    );
  }

}
