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

import { ComptaGlobalDto } from '../models/compta-global-dto';


/**
 * API billanComptable
 */
@Injectable({
  providedIn: 'root',
})
export class BilanComptableService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findByDateBetween
   */
  static readonly FindByDateBetweenPath = '/tradeManagement/v1/bilan-comptafind-by-date-between/{date1}/{date2}';

  /**
   * rechercher un bilan comptable.
   *
   * cette methode permet de rechercher un bilan comptable comprise entre deux dates passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByDateBetween()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDateBetween$Response(params: {
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ComptaGlobalDto>> {

    const rb = new RequestBuilder(this.rootUrl, BilanComptableService.FindByDateBetweenPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<ComptaGlobalDto>;
      })
    );
  }

  /**
   * rechercher un bilan comptable.
   *
   * cette methode permet de rechercher un bilan comptable comprise entre deux dates passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByDateBetween$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDateBetween(params: {
    date1: string;
    date2: string;
  },
  context?: HttpContext

): Observable<ComptaGlobalDto> {

    return this.findByDateBetween$Response(params,context).pipe(
      map((r: StrictHttpResponse<ComptaGlobalDto>) => r.body as ComptaGlobalDto)
    );
  }

  /**
   * Path part for operation findByDateBetweenAndUser
   */
  static readonly FindByDateBetweenAndUserPath = '/tradeManagement/v1/bilan-comptafind-by-date-between/{date1}/{date2}/{userName}';

  /**
   * rechercher un bilan comptable.
   *
   * cette methode permet de rechercher un bilan comptable comprise entre deux dates passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByDateBetweenAndUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDateBetweenAndUser$Response(params: {
    date1: string;
    date2: string;
    userName: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ComptaGlobalDto>> {

    const rb = new RequestBuilder(this.rootUrl, BilanComptableService.FindByDateBetweenAndUserPath, 'get');
    if (params) {
      rb.path('date1', params.date1, {});
      rb.path('date2', params.date2, {});
      rb.path('userName', params.userName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ComptaGlobalDto>;
      })
    );
  }

  /**
   * rechercher un bilan comptable.
   *
   * cette methode permet de rechercher un bilan comptable comprise entre deux dates passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByDateBetweenAndUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDateBetweenAndUser(params: {
    date1: string;
    date2: string;
    userName: string;
  },
  context?: HttpContext

): Observable<ComptaGlobalDto> {

    return this.findByDateBetweenAndUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<ComptaGlobalDto>) => r.body as ComptaGlobalDto)
    );
  }

}
