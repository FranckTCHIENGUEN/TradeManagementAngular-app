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

import { EtatFinancier } from '../models/etat-financier';


/**
 * API statisque
 */
@Injectable({
  providedIn: 'root',
})
export class StatisqueService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getEtatFinancierMonthYear
   */
  static readonly GetEtatFinancierMonthYearPath = '/tradeManagement/v1/stat/etat-financier-mois/{mois}/{annee}';

  /**
   * rechercher un etat financier.
   *
   * cette methode permet de rechercher un etat financier par mois
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEtatFinancierMonthYear()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEtatFinancierMonthYear$Response(params: {
    mois: number;
    annee: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EtatFinancier>> {

    const rb = new RequestBuilder(this.rootUrl, StatisqueService.GetEtatFinancierMonthYearPath, 'get');
    if (params) {
      rb.path('mois', params.mois, {});
      rb.path('annee', params.annee, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EtatFinancier>;
      })
    );
  }

  /**
   * rechercher un etat financier.
   *
   * cette methode permet de rechercher un etat financier par mois
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEtatFinancierMonthYear$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEtatFinancierMonthYear(params: {
    mois: number;
    annee: number;
  },
  context?: HttpContext

): Observable<EtatFinancier> {

    return this.getEtatFinancierMonthYear$Response(params,context).pipe(
      map((r: StrictHttpResponse<EtatFinancier>) => r.body as EtatFinancier)
    );
  }

  /**
   * Path part for operation getEtatFinancierYearBetwenn
   */
  static readonly GetEtatFinancierYearBetwennPath = '/tradeManagement/v1/stat/etat-financier-annee/{annee1}/{annee2}';

  /**
   * rechercher un etat financier.
   *
   * cette methode permet de rechercher un etat financier par année
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEtatFinancierYearBetwenn()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEtatFinancierYearBetwenn$Response(params: {
    annee1: number;
    annee2: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EtatFinancier>> {

    const rb = new RequestBuilder(this.rootUrl, StatisqueService.GetEtatFinancierYearBetwennPath, 'get');
    if (params) {
      rb.path('annee1', params.annee1, {});
      rb.path('annee2', params.annee2, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EtatFinancier>;
      })
    );
  }

  /**
   * rechercher un etat financier.
   *
   * cette methode permet de rechercher un etat financier par année
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEtatFinancierYearBetwenn$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEtatFinancierYearBetwenn(params: {
    annee1: number;
    annee2: number;
  },
  context?: HttpContext

): Observable<EtatFinancier> {

    return this.getEtatFinancierYearBetwenn$Response(params,context).pipe(
      map((r: StrictHttpResponse<EtatFinancier>) => r.body as EtatFinancier)
    );
  }

}
