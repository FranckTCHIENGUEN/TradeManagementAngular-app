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

import { AuthentificationRequest } from '../models/authentification-request';
import { AuthentificationResponse } from '../models/authentification-response';


/**
 * API authentification
 */
@Injectable({
  providedIn: 'root',
})
export class AuthentificationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation disconect
   */
  static readonly DisconectPath = '/tradeManagement/v1/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disconect()` instead.
   *
   * This method doesn't expect any request body.
   */
  disconect$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthentificationService.DisconectPath, 'post');
    if (params) {
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
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `disconect$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disconect(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.disconect$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation refreshToken
   */
  static readonly RefreshTokenPath = '/tradeManagement/v1/login/refresh-token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshToken$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthentificationService.RefreshTokenPath, 'post');
    if (params) {
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
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshToken(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.refreshToken$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation authentificationResponseResponseEntity
   */
  static readonly AuthentificationResponseResponseEntityPath = '/tradeManagement/v1/login/authentication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authentificationResponseResponseEntity()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authentificationResponseResponseEntity$Response(params: {
    body: AuthentificationRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AuthentificationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthentificationService.AuthentificationResponseResponseEntityPath, 'post');
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
        return r as StrictHttpResponse<AuthentificationResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authentificationResponseResponseEntity$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authentificationResponseResponseEntity(params: {
    body: AuthentificationRequest
  },
  context?: HttpContext

): Observable<AuthentificationResponse> {

    return this.authentificationResponseResponseEntity$Response(params,context).pipe(
      map((r: StrictHttpResponse<AuthentificationResponse>) => r.body as AuthentificationResponse)
    );
  }

}
