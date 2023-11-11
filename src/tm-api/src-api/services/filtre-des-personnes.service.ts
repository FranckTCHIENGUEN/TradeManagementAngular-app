/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {PersonSearchDto} from '../models/person-search-dto';


/**
 * API de filtre de personne
 */
@Injectable({
  providedIn: 'root',
})
export class FiltreDesPersonnesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation filterPerson
   */
  static readonly FilterPersonPath = '/tradeManagement/v1/filtrePersonne/{context}';

  /**
   * realiser un filtre sur les personne.
   *
   * cette methode permet de realiser les filtres sur les clients, les utilisateurs et meme les fournisseurs.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterPerson()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterPerson$Response(params: {
    context: string;
    body: PersonSearchDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, FiltreDesPersonnesService.FilterPersonPath, 'post');
    if (params) {
      rb.path('context', params.context, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * realiser un filtre sur les personne.
   *
   * cette methode permet de realiser les filtres sur les clients, les utilisateurs et meme les fournisseurs.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterPerson$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterPerson(params: {
    context: string;
    body: PersonSearchDto
  },
  context?: HttpContext

): Observable<{
}> {

    return this.filterPerson$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

}
