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

import { ArticleDto } from '../models/article-dto';


/**
 * API article
 */
@Injectable({
  providedIn: 'root',
})
export class ArticleService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save14
   */
  static readonly Save14Path = '/tradeManagement/v1/articles/create';

  /**
   * enregistrer un article.
   *
   * cette methode permet d'enregistrer ou de modifier un article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save14()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save14$Response(params: {
    body: ArticleDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ArticleDto>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.Save14Path, 'post');
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
        return r as StrictHttpResponse<ArticleDto>;
      })
    );
  }

  /**
   * enregistrer un article.
   *
   * cette methode permet d'enregistrer ou de modifier un article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save14$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save14(params: {
    body: ArticleDto
  },
  context?: HttpContext

): Observable<ArticleDto> {

    return this.save14$Response(params,context).pipe(
      map((r: StrictHttpResponse<ArticleDto>) => r.body as ArticleDto)
    );
  }

  /**
   * Path part for operation findById16
   */
  static readonly FindById16Path = '/tradeManagement/v1/articles/{idArticle}';

  /**
   * rechercher un article.
   *
   * cette methode permet de rechercher un article par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById16()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById16$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ArticleDto>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.FindById16Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ArticleDto>;
      })
    );
  }

  /**
   * rechercher un article.
   *
   * cette methode permet de rechercher un article par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById16$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById16(params?: {
  },
  context?: HttpContext

): Observable<ArticleDto> {

    return this.findById16$Response(params,context).pipe(
      map((r: StrictHttpResponse<ArticleDto>) => r.body as ArticleDto)
    );
  }

  /**
   * Path part for operation delete16
   */
  static readonly Delete16Path = '/tradeManagement/v1/articles/{idArticle}';

  /**
   * supprimer un article.
   *
   * cette methode permet de supprimer un article par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete16()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete16$Response(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.Delete16Path, 'delete');
    if (params) {
      rb.path('idArticle', params.idArticle, {});
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
   * supprimer un article.
   *
   * cette methode permet de supprimer un article par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete16$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete16(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete16$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByCodeArticle
   */
  static readonly FindByCodeArticlePath = '/tradeManagement/v1/articles/{codeArticle}';

  /**
   * rechercher un article.
   *
   * cette methode permet de rechercher un article par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCodeArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle$Response(params: {
    codeArticle: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ArticleDto>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.FindByCodeArticlePath, 'get');
    if (params) {
      rb.path('codeArticle', params.codeArticle, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ArticleDto>;
      })
    );
  }

  /**
   * rechercher un article.
   *
   * cette methode permet de rechercher un article par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCodeArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle(params: {
    codeArticle: string;
  },
  context?: HttpContext

): Observable<ArticleDto> {

    return this.findByCodeArticle$Response(params,context).pipe(
      map((r: StrictHttpResponse<ArticleDto>) => r.body as ArticleDto)
    );
  }

  /**
   * Path part for operation findAll16
   */
  static readonly FindAll16Path = '/tradeManagement/v1/articles/';

  /**
   * obtenir la liste de tous les articles.
   *
   * cette methode permet de rechercher tous les articles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll16()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll16$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ArticleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleService.FindAll16Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }

  /**
   * obtenir la liste de tous les articles.
   *
   * cette methode permet de rechercher tous les articles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll16$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll16(params?: {
  },
  context?: HttpContext

): Observable<Array<ArticleDto>> {

    return this.findAll16$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>) => r.body as Array<ArticleDto>)
    );
  }

}
