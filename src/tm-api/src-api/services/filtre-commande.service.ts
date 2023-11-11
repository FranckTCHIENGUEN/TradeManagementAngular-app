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

import {CommandSearch} from '../models/command-search';


/**
 * API de filtre de commande
 */
@Injectable({
  providedIn: 'root',
})
export class FiltreCommandeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation filterCommand
   */
  static readonly FilterCommandPath = '/tradeManagement/v1/filtreCommande/{context}';

  /**
   * rechercher un article.
   *
   * cette methode permet de mettre a jour la photo d'une entité par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filterCommand()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterCommand$Response(params: {
    context: string;
    body: CommandSearch
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, FiltreCommandeService.FilterCommandPath, 'post');
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
   * rechercher un article.
   *
   * cette methode permet de mettre a jour la photo d'une entité par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filterCommand$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filterCommand(params: {
    context: string;
    body: CommandSearch
  },
  context?: HttpContext

): Observable<{
}> {

    return this.filterCommand$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

}
