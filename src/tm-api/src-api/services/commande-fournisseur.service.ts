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

import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { HistoriqueArticleDto } from '../models/historique-article-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';


/**
 * API Commande Fournisseur
 */
@Injectable({
  providedIn: 'root',
})
export class CommandeFournisseurService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll10
   */
  static readonly FindAll10Path = '/tradeManagement/v1/commandesfournisseurs/';

  /**
   * obtenir la liste de toutes les commandes fournisseurs.
   *
   * cette methode permet de rechercher tous les commande fournisseurs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll10()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll10$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CommandeFournisseurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.FindAll10Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }

  /**
   * obtenir la liste de toutes les commandes fournisseurs.
   *
   * cette methode permet de rechercher tous les commande fournisseurs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll10(params?: {
  },
  context?: HttpContext

): Observable<Array<CommandeFournisseurDto>> {

    return this.findAll10$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CommandeFournisseurDto>>) => r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * Path part for operation save8
   */
  static readonly Save8Path = '/tradeManagement/v1/commandesfournisseurs/';

  /**
   * enregistrer une commande fournisseur.
   *
   * cette methode permet d'enregistrer ou de modifier une commande fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save8()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8$Response(params: {
    body: CommandeFournisseurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeFournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.Save8Path, 'post');
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
        return r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }

  /**
   * enregistrer une commande fournisseur.
   *
   * cette methode permet d'enregistrer ou de modifier une commande fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save8$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8(params: {
    body: CommandeFournisseurDto
  },
  context?: HttpContext

): Observable<CommandeFournisseurDto> {

    return this.save8$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>) => r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Path part for operation updateQteCommande
   */
  static readonly UpdateQteCommandePath = '/tradeManagement/v1/commandesfournisseurs/update-quantite/{idCommande}?{idLigneCommande}?{quantite}';

  /**
   * modifier l'etat d'une commande fournisseur.
   *
   * cette methode permet de modifier l'etat d'une commande fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQteCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQteCommande$Response(params: {
    idCommande: number;
    idLigneCommande: number;
    quantite: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeFournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.UpdateQteCommandePath, 'patch');
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
        return r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }

  /**
   * modifier l'etat d'une commande fournisseur.
   *
   * cette methode permet de modifier l'etat d'une commande fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQteCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQteCommande(params: {
    idCommande: number;
    idLigneCommande: number;
    quantite: number;
  },
  context?: HttpContext

): Observable<CommandeFournisseurDto> {

    return this.updateQteCommande$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>) => r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Path part for operation updateLigneommande
   */
  static readonly UpdateLigneommandePath = '/tradeManagement/v1/commandesfournisseurs/update-ligne';

  /**
   * enregistrer une commande client.
   *
   * cette methode permet d'enregistrer ou de modifier une commande client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLigneommande()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLigneommande$Response(params: {
    body: LigneCommandeFournisseurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeFournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.UpdateLigneommandePath, 'patch');
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
        return r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }

  /**
   * enregistrer une commande client.
   *
   * cette methode permet d'enregistrer ou de modifier une commande client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLigneommande$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLigneommande(params: {
    body: LigneCommandeFournisseurDto
  },
  context?: HttpContext

): Observable<CommandeFournisseurDto> {

    return this.updateLigneommande$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>) => r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Path part for operation updateFournisseurCommande
   */
  static readonly UpdateFournisseurCommandePath = '/tradeManagement/v1/commandesfournisseurs/update-fournisseur/{idCommande}?{idFournisseur}';

  /**
   * modifier l'etat d'une commande fournisseur.
   *
   * cette methode permet de modifier l'etat d'une commande fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFournisseurCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateFournisseurCommande$Response(params: {
    idCommande: number;
    idFournisseur: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeFournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.UpdateFournisseurCommandePath, 'patch');
    if (params) {
      rb.path('idCommande', params.idCommande, {});
      rb.path('idFournisseur', params.idFournisseur, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }

  /**
   * modifier l'etat d'une commande fournisseur.
   *
   * cette methode permet de modifier l'etat d'une commande fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateFournisseurCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateFournisseurCommande(params: {
    idCommande: number;
    idFournisseur: number;
  },
  context?: HttpContext

): Observable<CommandeFournisseurDto> {

    return this.updateFournisseurCommande$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>) => r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Path part for operation updateEtatCommande
   */
  static readonly UpdateEtatCommandePath = '/tradeManagement/v1/commandesfournisseurs/update-etat/{idCommande}/{etatCommande}';

  /**
   * modifier l'etat d'une commande fournisseur.
   *
   * cette methode permet de modifier l'etat d'une commande fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEtatCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande$Response(params: {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'RECEPTIONNER' | 'VALIDER' | 'LIVRER';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeFournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.UpdateEtatCommandePath, 'patch');
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
        return r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }

  /**
   * modifier l'etat d'une commande fournisseur.
   *
   * cette methode permet de modifier l'etat d'une commande fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEtatCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande(params: {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'RECEPTIONNER' | 'VALIDER' | 'LIVRER';
  },
  context?: HttpContext

): Observable<CommandeFournisseurDto> {

    return this.updateEtatCommande$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>) => r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Path part for operation updateArticleCommande
   */
  static readonly UpdateArticleCommandePath = '/tradeManagement/v1/commandesfournisseurs/update-article/{idCommande}?{idLigneCommande}?{typeCom}?{newIdArticle}';

  /**
   * modifier l'article d'une ligne de commande fournisseur.
   *
   * cette methode permet de modifier l'article d'une ligne decommande fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArticleCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticleCommande$Response(params: {
    idCommande: number;
    idLigneCommande: number;
    typeCom: 'PRODUIT' | 'SERVICE' | 'MATERIEL';
    newIdArticle: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeFournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.UpdateArticleCommandePath, 'patch');
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
        return r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }

  /**
   * modifier l'article d'une ligne de commande fournisseur.
   *
   * cette methode permet de modifier l'article d'une ligne decommande fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArticleCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticleCommande(params: {
    idCommande: number;
    idLigneCommande: number;
    typeCom: 'PRODUIT' | 'SERVICE' | 'MATERIEL';
    newIdArticle: number;
  },
  context?: HttpContext

): Observable<CommandeFournisseurDto> {

    return this.updateArticleCommande$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>) => r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Path part for operation findHistoCommandeByArticle
   */
  static readonly FindHistoCommandeByArticlePath = '/tradeManagement/v1/commandesfournisseursfind-commandearticle/{idArticle}';

  /**
   * rechercher l'historique des commandes fournisseur d'un article.
   *
   * cette methode permet de rechercher l'historique des commandes fournisseur d'un article par l'id de l'article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistoCommandeByArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoCommandeByArticle$Response(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<HistoriqueArticleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.FindHistoCommandeByArticlePath, 'get');
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
   * rechercher l'historique des commandes fournisseur d'un article.
   *
   * cette methode permet de rechercher l'historique des commandes fournisseur d'un article par l'id de l'article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistoCommandeByArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoCommandeByArticle(params: {
    idArticle: number;
  },
  context?: HttpContext

): Observable<Array<HistoriqueArticleDto>> {

    return this.findHistoCommandeByArticle$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<HistoriqueArticleDto>>) => r.body as Array<HistoriqueArticleDto>)
    );
  }

  /**
   * Path part for operation findById10
   */
  static readonly FindById10Path = '/tradeManagement/v1/commandesfournisseurs/{id}';

  /**
   * rechercher une commande fournisseur.
   *
   * cette methode permet de rechercher une commande fournisseur par son ID
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

): Observable<StrictHttpResponse<CommandeFournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.FindById10Path, 'get');
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
        return r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }

  /**
   * rechercher une commande fournisseur.
   *
   * cette methode permet de rechercher une commande fournisseur par son ID
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

): Observable<CommandeFournisseurDto> {

    return this.findById10$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>) => r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Path part for operation delete10
   */
  static readonly Delete10Path = '/tradeManagement/v1/commandesfournisseurs/{id}';

  /**
   * supprimer une commande fournisseur.
   *
   * cette methode permet de supprimer un commande fournisseur par son ID
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

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.Delete10Path, 'delete');
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
   * supprimer une commande fournisseur.
   *
   * cette methode permet de supprimer un commande fournisseur par son ID
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
   * Path part for operation findByCode2
   */
  static readonly FindByCode2Path = '/tradeManagement/v1/commandesfournisseurs/{code}';

  /**
   * rechercher une commande fournisseur.
   *
   * cette methode permet de rechercher une commande fournisseur par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2$Response(params: {
    code: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeFournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.FindByCode2Path, 'get');
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
        return r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }

  /**
   * rechercher une commande fournisseur.
   *
   * cette methode permet de rechercher une commande fournisseur par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2(params: {
    code: string;
  },
  context?: HttpContext

): Observable<CommandeFournisseurDto> {

    return this.findByCode2$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>) => r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Path part for operation findLigneCommade1
   */
  static readonly FindLigneCommade1Path = '/tradeManagement/v1/commandesfournisseurs/find_lignecommande/{idCommande}';

  /**
   * rechercher les ligne de commande fournisseur.
   *
   * cette methode permet de rechercher les lignes decommande fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findLigneCommade1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLigneCommade1$Response(params: {
    idCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.FindLigneCommade1Path, 'get');
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
        return r as StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }

  /**
   * rechercher les ligne de commande fournisseur.
   *
   * cette methode permet de rechercher les lignes decommande fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findLigneCommade1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findLigneCommade1(params: {
    idCommande: number;
  },
  context?: HttpContext

): Observable<Array<LigneCommandeFournisseurDto>> {

    return this.findLigneCommade1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeFournisseurDto>>) => r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * Path part for operation deleteLigneCommande
   */
  static readonly DeleteLigneCommandePath = '/tradeManagement/v1/commandesfournisseurs/delete-ligneCommande/{idCommande}?{idLigneCommande}';

  /**
   * suppression d'une ligne de commande fournisseur.
   *
   * cette methode permet de supprimer une ligne decommande fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLigneCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLigneCommande$Response(params: {
    idCommande: number;
    idLigneCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CommandeFournisseurDto>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeFournisseurService.DeleteLigneCommandePath, 'delete');
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
        return r as StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }

  /**
   * suppression d'une ligne de commande fournisseur.
   *
   * cette methode permet de supprimer une ligne decommande fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLigneCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLigneCommande(params: {
    idCommande: number;
    idLigneCommande: number;
  },
  context?: HttpContext

): Observable<CommandeFournisseurDto> {

    return this.deleteLigneCommande$Response(params,context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>) => r.body as CommandeFournisseurDto)
    );
  }

}
