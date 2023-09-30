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

import { PaiementDto } from '../models/paiement-dto';


/**
 * API paiement
 */
@Injectable({
  providedIn: 'root',
})
export class PaiementService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation saveAll
   */
  static readonly SaveAllPath = '/tradeManagement/v1/paiement/save-all/';

  /**
   * enregistrer un role.
   *
   * cette methode permet de enregistrer un role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAll$Response(params: {
    body: Array<PaiementDto>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PaiementDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PaiementService.SaveAllPath, 'post');
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
        return r as StrictHttpResponse<Array<PaiementDto>>;
      })
    );
  }

  /**
   * enregistrer un role.
   *
   * cette methode permet de enregistrer un role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAll(params: {
    body: Array<PaiementDto>
  },
  context?: HttpContext

): Observable<Array<PaiementDto>> {

    return this.saveAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PaiementDto>>) => r.body as Array<PaiementDto>)
    );
  }

  /**
   * Path part for operation findById4
   */
  static readonly FindById4Path = '/tradeManagement/v1/paiement/{id}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PaiementDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaiementService.FindById4Path, 'get');
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
        return r as StrictHttpResponse<PaiementDto>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4(params: {
    id: number;
  },
  context?: HttpContext

): Observable<PaiementDto> {

    return this.findById4$Response(params,context).pipe(
      map((r: StrictHttpResponse<PaiementDto>) => r.body as PaiementDto)
    );
  }

  /**
   * Path part for operation delete4
   */
  static readonly Delete4Path = '/tradeManagement/v1/paiement/{id}';

  /**
   * supprimer un role.
   *
   * cette methode permet de supprimer un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaiementService.Delete4Path, 'delete');
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
   * To access the full response (for headers, for example), `delete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete4$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByObjetAndDatepaiementBetween
   */
  static readonly FindByObjetAndDatepaiementBetweenPath = '/tradeManagement/v1/paiement/objet-date/{objet}?{date1}?{date2}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByObjetAndDatepaiementBetween()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByObjetAndDatepaiementBetween$Response(params: {
    objet: 'CC' | 'CF' | 'VENTE' | 'DEPENSE';
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PaiementDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PaiementService.FindByObjetAndDatepaiementBetweenPath, 'get');
    if (params) {
      rb.path('objet', params.objet, {});
      rb.path('date1', params.date1, {});
      rb.path('date2', params.date2, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaiementDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByObjetAndDatepaiementBetween$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByObjetAndDatepaiementBetween(params: {
    objet: 'CC' | 'CF' | 'VENTE' | 'DEPENSE';
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<Array<PaiementDto>> {

    return this.findByObjetAndDatepaiementBetween$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PaiementDto>>) => r.body as Array<PaiementDto>)
    );
  }

  /**
   * Path part for operation findByMode
   */
  static readonly FindByModePath = '/tradeManagement/v1/paiement/mode/{mode}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByMode()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByMode$Response(params: {
    mode: 'MOBILE_MONNEY' | 'ORANGE_MONNEY' | 'REMBOURSSEMENT' | 'ESPECE';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PaiementDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PaiementService.FindByModePath, 'get');
    if (params) {
      rb.path('mode', params.mode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaiementDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByMode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByMode(params: {
    mode: 'MOBILE_MONNEY' | 'ORANGE_MONNEY' | 'REMBOURSSEMENT' | 'ESPECE';
  },
  context?: HttpContext

): Observable<Array<PaiementDto>> {

    return this.findByMode$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PaiementDto>>) => r.body as Array<PaiementDto>)
    );
  }

  /**
   * Path part for operation findByModeAndObjet
   */
  static readonly FindByModeAndObjetPath = '/tradeManagement/v1/paiement/mode-objet';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByModeAndObjet()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByModeAndObjet$Response(params: {
    mode: 'MOBILE_MONNEY' | 'ORANGE_MONNEY' | 'REMBOURSSEMENT' | 'ESPECE';
    objet: 'CC' | 'CF' | 'VENTE' | 'DEPENSE';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PaiementDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PaiementService.FindByModeAndObjetPath, 'get');
    if (params) {
      rb.query('mode', params.mode, {});
      rb.query('objet', params.objet, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaiementDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByModeAndObjet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByModeAndObjet(params: {
    mode: 'MOBILE_MONNEY' | 'ORANGE_MONNEY' | 'REMBOURSSEMENT' | 'ESPECE';
    objet: 'CC' | 'CF' | 'VENTE' | 'DEPENSE';
  },
  context?: HttpContext

): Observable<Array<PaiementDto>> {

    return this.findByModeAndObjet$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PaiementDto>>) => r.body as Array<PaiementDto>)
    );
  }

  /**
   * Path part for operation findByObjetAndIdObjet
   */
  static readonly FindByObjetAndIdObjetPath = '/tradeManagement/v1/paiement/findobjet-idObjet';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByObjetAndIdObjet()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByObjetAndIdObjet$Response(params: {
    objet: 'CC' | 'CF' | 'VENTE' | 'DEPENSE';
    idObjet: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PaiementDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PaiementService.FindByObjetAndIdObjetPath, 'get');
    if (params) {
      rb.query('objet', params.objet, {});
      rb.query('idObjet', params.idObjet, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaiementDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByObjetAndIdObjet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByObjetAndIdObjet(params: {
    objet: 'CC' | 'CF' | 'VENTE' | 'DEPENSE';
    idObjet: number;
  },
  context?: HttpContext

): Observable<Array<PaiementDto>> {

    return this.findByObjetAndIdObjet$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PaiementDto>>) => r.body as Array<PaiementDto>)
    );
  }

  /**
   * Path part for operation findByObjetAndIdObjetAndDatepaiementBetween
   */
  static readonly FindByObjetAndIdObjetAndDatepaiementBetweenPath = '/tradeManagement/v1/paiement/findobjet-idObjet-date/{objet}?{idObjet}?{date1}?{date2}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByObjetAndIdObjetAndDatepaiementBetween()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByObjetAndIdObjetAndDatepaiementBetween$Response(params: {
    objet: 'CC' | 'CF' | 'VENTE' | 'DEPENSE';
    idObjet: number;
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PaiementDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PaiementService.FindByObjetAndIdObjetAndDatepaiementBetweenPath, 'get');
    if (params) {
      rb.path('objet', params.objet, {});
      rb.path('idObjet', params.idObjet, {});
      rb.path('date1', params.date1, {});
      rb.path('date2', params.date2, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaiementDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByObjetAndIdObjetAndDatepaiementBetween$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByObjetAndIdObjetAndDatepaiementBetween(params: {
    objet: 'CC' | 'CF' | 'VENTE' | 'DEPENSE';
    idObjet: number;
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<Array<PaiementDto>> {

    return this.findByObjetAndIdObjetAndDatepaiementBetween$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PaiementDto>>) => r.body as Array<PaiementDto>)
    );
  }

  /**
   * Path part for operation findAll4
   */
  static readonly FindAll4Path = '/tradeManagement/v1/paiement/';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher la liste des roles elle retourne la liste de tous les roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PaiementDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PaiementService.FindAll4Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaiementDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher la liste des roles elle retourne la liste de tous les roles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4(params?: {
  },
  context?: HttpContext

): Observable<Array<PaiementDto>> {

    return this.findAll4$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PaiementDto>>) => r.body as Array<PaiementDto>)
    );
  }

}
