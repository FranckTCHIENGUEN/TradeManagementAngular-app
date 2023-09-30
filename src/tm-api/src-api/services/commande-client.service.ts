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

import { CommandeClientDto } from '../models/commande-client-dto';
import { HistoriqueArticleDto } from '../models/historique-article-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';


/**
 * API Commande Client
 */
@Injectable({
  providedIn: 'root',
})
export class CommandeClientService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save8
   */
  static readonly Save8Path = '/tradeManagement/v1/commandesclients/create';

  /**
   * enregistrer une commande client.
   *
   * cette methode permet d'enregistrer ou de modifier une commande client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save8()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8$Response(params: {
    body: CommandeClientDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.Save8Path, 'post');
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
        return r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  /**
   * enregistrer une commande client.
   *
   * cette methode permet d'enregistrer ou de modifier une commande client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save8$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8(params: {
    body: CommandeClientDto
  },
  context?: HttpContext

): Observable<CommandeClientDto> {

    return this.save8$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>) => r.body as CommandeClientDto)
    );
  }

  /**
   * Path part for operation updateQteCommande1
   */
  static readonly UpdateQteCommande1Path = '/tradeManagement/v1/commandesclients/update-quantite/{idCommande}?{idLigneCommande}/{quantite}';

  /**
   * modifier l'etat d'une commande client.
   *
   * cette methode permet de modifier l'etat d'une commande client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQteCommande1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQteCommande1$Response(params: {
    idCommande: number;
    idLigneCommande: number;
    quantite: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.UpdateQteCommande1Path, 'patch');
    if (params) {
      rb.path('idCommande', params.idCommande, {});
      rb.path('idLigneCommande', params.idLigneCommande, {});
      rb.path('quantite', params.quantite, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  /**
   * modifier l'etat d'une commande client.
   *
   * cette methode permet de modifier l'etat d'une commande client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQteCommande1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQteCommande1(params: {
    idCommande: number;
    idLigneCommande: number;
    quantite: number;
  },
  context?: HttpContext

): Observable<CommandeClientDto> {

    return this.updateQteCommande1$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>) => r.body as CommandeClientDto)
    );
  }

  /**
   * Path part for operation updateLigneommande1
   */
  static readonly UpdateLigneommande1Path = '/tradeManagement/v1/commandesclients/update-ligne';

  /**
   * enregistrer une commande client.
   *
   * cette methode permet d'enregistrer ou de modifier une commande client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLigneommande1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLigneommande1$Response(params: {
    body: LigneCommandeClientDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.UpdateLigneommande1Path, 'patch');
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
        return r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  /**
   * enregistrer une commande client.
   *
   * cette methode permet d'enregistrer ou de modifier une commande client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLigneommande1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLigneommande1(params: {
    body: LigneCommandeClientDto
  },
  context?: HttpContext

): Observable<CommandeClientDto> {

    return this.updateLigneommande1$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>) => r.body as CommandeClientDto)
    );
  }

  /**
   * Path part for operation updateEtatCommande1
   */
  static readonly UpdateEtatCommande1Path = '/tradeManagement/v1/commandesclients/update-etat/{idCommande}?{etatCommande}';

  /**
   * modifier l'etat d'une commande client.
   *
   * cette methode permet de modifier l'etat d'une commande client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEtatCommande1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande1$Response(params: {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'RECEPTIONER' | 'VALIDER' | 'LIVRER';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.UpdateEtatCommande1Path, 'patch');
    if (params) {
      rb.path('idCommande', params.idCommande, {});
      rb.path('etatCommande', params.etatCommande, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  /**
   * modifier l'etat d'une commande client.
   *
   * cette methode permet de modifier l'etat d'une commande client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEtatCommande1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande1(params: {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'RECEPTIONER' | 'VALIDER' | 'LIVRER';
  },
  context?: HttpContext

): Observable<CommandeClientDto> {

    return this.updateEtatCommande1$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>) => r.body as CommandeClientDto)
    );
  }

  /**
   * Path part for operation updateClientCommande
   */
  static readonly UpdateClientCommandePath = '/tradeManagement/v1/commandesclients/update-client/{idCommande}?{idClient}';

  /**
   * modifier l'etat d'une commande client.
   *
   * cette methode permet de modifier l'etat d'une commande client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateClientCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateClientCommande$Response(params: {
    idCommande: number;
    idClient: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.UpdateClientCommandePath, 'patch');
    if (params) {
      rb.path('idCommande', params.idCommande, {});
      rb.path('idClient', params.idClient, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  /**
   * modifier l'etat d'une commande client.
   *
   * cette methode permet de modifier l'etat d'une commande client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateClientCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateClientCommande(params: {
    idCommande: number;
    idClient: number;
  },
  context?: HttpContext

): Observable<CommandeClientDto> {

    return this.updateClientCommande$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>) => r.body as CommandeClientDto)
    );
  }

  /**
   * Path part for operation updateArticleCommande1
   */
  static readonly UpdateArticleCommande1Path = '/tradeManagement/v1/commandesclients/update-article/{idCommande}?{idLigneCommande}?{typeCom}?{newIdArticle}';

  /**
   * modifier l'article d'une ligne de commande client.
   *
   * cette methode permet de modifier l'article d'une ligne decommande client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArticleCommande1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticleCommande1$Response(params: {
    idCommande: number;
    idLigneCommande: number;
    typeCom: 'PRODUIT' | 'SERVICE' | 'MATERIEL';
    newIdArticle: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.UpdateArticleCommande1Path, 'patch');
    if (params) {
      rb.path('idCommande', params.idCommande, {});
      rb.path('idLigneCommande', params.idLigneCommande, {});
      rb.path('typeCom', params.typeCom, {});
      rb.path('newIdArticle', params.newIdArticle, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  /**
   * modifier l'article d'une ligne de commande client.
   *
   * cette methode permet de modifier l'article d'une ligne decommande client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArticleCommande1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticleCommande1(params: {
    idCommande: number;
    idLigneCommande: number;
    typeCom: 'PRODUIT' | 'SERVICE' | 'MATERIEL';
    newIdArticle: number;
  },
  context?: HttpContext

): Observable<CommandeClientDto> {

    return this.updateArticleCommande1$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>) => r.body as CommandeClientDto)
    );
  }

  /**
   * Path part for operation findHistoCommandeByArticle1
   */
  static readonly FindHistoCommandeByArticle1Path = '/tradeManagement/v1/commandesclientsfind-commandearticle/{idArticle}';

  /**
   * rechercher l'historique des commandes client d'un article.
   *
   * cette methode permet de rechercher l'historique des commandes client d'un article par l'id de l'article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistoCommandeByArticle1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoCommandeByArticle1$Response(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<HistoriqueArticleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.FindHistoCommandeByArticle1Path, 'get');
    if (params) {
      rb.path('idArticle', params.idArticle, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HistoriqueArticleDto>>;
      })
    );
  }

  /**
   * rechercher l'historique des commandes client d'un article.
   *
   * cette methode permet de rechercher l'historique des commandes client d'un article par l'id de l'article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistoCommandeByArticle1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoCommandeByArticle1(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<Array<HistoriqueArticleDto>> {

    return this.findHistoCommandeByArticle1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<HistoriqueArticleDto>>) => r.body as Array<HistoriqueArticleDto>)
    );
  }

  /**
   * Path part for operation findById10
   */
  static readonly FindById10Path = '/tradeManagement/v1/commandesclients/{id}';

  /**
   * rechercher une commande client.
   *
   * cette methode permet de rechercher une commande client par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById10()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById10$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.FindById10Path, 'get');
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
        return r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  /**
   * rechercher une commande client.
   *
   * cette methode permet de rechercher une commande client par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById10(params: {
    id: number;
  },
  context?: HttpContext

): Observable<CommandeClientDto> {

    return this.findById10$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>) => r.body as CommandeClientDto)
    );
  }

  /**
   * Path part for operation delete10
   */
  static readonly Delete10Path = '/tradeManagement/v1/commandesclients/{id}';

  /**
   * supprimer une commande client.
   *
   * cette methode permet de supprimer un commande client par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete10()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete10$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.Delete10Path, 'delete');
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
   * supprimer une commande client.
   *
   * cette methode permet de supprimer un commande client par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete10(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete10$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByCode3
   */
  static readonly FindByCode3Path = '/tradeManagement/v1/commandesclients/{code}';

  /**
   * rechercher une commande client.
   *
   * cette methode permet de rechercher une commande client par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode3$Response(params: {
    code: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.FindByCode3Path, 'get');
    if (params) {
      rb.path('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  /**
   * rechercher une commande client.
   *
   * cette methode permet de rechercher une commande client par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode3(params: {
    code: string;
  },
  context?: HttpContext

): Observable<CommandeClientDto> {

    return this.findByCode3$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>) => r.body as CommandeClientDto)
    );
  }

  /**
   * Path part for operation findLigneCommade2
   */
  static readonly FindLigneCommade2Path = '/tradeManagement/v1/commandesclients/find_lignecommande/{idCommande}';

  /**
   * rechercher les ligne de commande client.
   *
   * cette methode permet de rechercher les lignes decommande client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findLigneCommade2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLigneCommade2$Response(params: {
    idCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.FindLigneCommade2Path, 'get');
    if (params) {
      rb.path('idCommande', params.idCommande, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }

  /**
   * rechercher les ligne de commande client.
   *
   * cette methode permet de rechercher les lignes decommande client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findLigneCommade2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLigneCommade2(params: {
    idCommande: number;
  },
  context?: HttpContext

): Observable<Array<LigneCommandeClientDto>> {

    return this.findLigneCommade2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeClientDto>>) => r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * Path part for operation findAll10
   */
  static readonly FindAll10Path = '/tradeManagement/v1/commandesclients/';

  /**
   * obtenir la liste de toutes les commandes clients.
   *
   * cette methode permet de rechercher tous les commande clients
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll10()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll10$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CommandeClientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.FindAll10Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CommandeClientDto>>;
      })
    );
  }

  /**
   * obtenir la liste de toutes les commandes clients.
   *
   * cette methode permet de rechercher tous les commande clients
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll10(params?: {
  },
  context?: HttpContext

): Observable<Array<CommandeClientDto>> {

    return this.findAll10$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CommandeClientDto>>) => r.body as Array<CommandeClientDto>)
    );
  }

  /**
   * Path part for operation deleteLigneCommande1
   */
  static readonly DeleteLigneCommande1Path = '/tradeManagement/v1/commandesclients/delete-ligneCommande/{idCommande}?{idLigneCommande}';

  /**
   * suppression d'une ligne de commande client.
   *
   * cette methode permet de supprimer une ligne decommande client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLigneCommande1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLigneCommande1$Response(params: {
    idCommande: number;
    idLigneCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeClientService.DeleteLigneCommande1Path, 'delete');
    if (params) {
      rb.path('idCommande', params.idCommande, {});
      rb.path('idLigneCommande', params.idLigneCommande, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommandeClientDto>;
      })
    );
  }

  /**
   * suppression d'une ligne de commande client.
   *
   * cette methode permet de supprimer une ligne decommande client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLigneCommande1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLigneCommande1(params: {
    idCommande: number;
    idLigneCommande: number;
  },
  context?: HttpContext

): Observable<CommandeClientDto> {

    return this.deleteLigneCommande1$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>) => r.body as CommandeClientDto)
    );
  }

}
