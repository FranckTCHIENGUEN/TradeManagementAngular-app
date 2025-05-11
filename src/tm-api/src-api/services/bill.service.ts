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



/**
 * API permettant de generer la facture V2
 */
@Injectable({
  providedIn: 'root',
})
export class BillService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation generatePdf
   */
  static readonly GeneratePdfPath = '/tradeManagement/v1/facture/generer/{idCommande}';

  /**
   * Générer une facture PDF.
   *
   * Génère et télécharge la facture sous format PDF pour une commande donnée.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generatePdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePdf$Response(params: {
    idCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, BillService.GeneratePdfPath, 'get');
    if (params) {
      rb.path('idCommande', params.idCommande, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Générer une facture PDF.
   *
   * Génère et télécharge la facture sous format PDF pour une commande donnée.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generatePdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePdf(params: {
    idCommande: number;
  },
  context?: HttpContext

): Observable<Blob> {

    return this.generatePdf$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
