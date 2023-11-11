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

import {UtilisateurDto} from '../models/utilisateur-dto';


/**
 * API Utilisateur
 */
@Injectable({
  providedIn: 'root',
})
export class UtilisateurService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation removeRoleToUser
   */
  static readonly RemoveRoleToUserPath = '/tradeManagement/v1/utilisateurs/removeroleuser/{iduser}/{idrole}';

  /**
   * retirer un role a un utilisateur.
   *
   * cette methode permet de rechercher les organisations dont le nom resemble au nom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeRoleToUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeRoleToUser$Response(params: {
    iduser: number;
    idrole: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.RemoveRoleToUserPath, 'put');
    if (params) {
      rb.path('iduser', params.iduser, {});
      rb.path('idrole', params.idrole, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * retirer un role a un utilisateur.
   *
   * cette methode permet de rechercher les organisations dont le nom resemble au nom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeRoleToUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeRoleToUser(params: {
    iduser: number;
    idrole: number;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.removeRoleToUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation addRoleToUser
   */
  static readonly AddRoleToUserPath = '/tradeManagement/v1/utilisateurs/addroleuser/{iduser}/{idrole}';

  /**
   * ajouter un role a un utilisateur.
   *
   * cette methode permet de rechercher les organisations dont le nom resemble au nom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addRoleToUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  addRoleToUser$Response(params: {
    iduser: number;
    idrole: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.AddRoleToUserPath, 'put');
    if (params) {
      rb.path('iduser', params.iduser, {});
      rb.path('idrole', params.idrole, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * ajouter un role a un utilisateur.
   *
   * cette methode permet de rechercher les organisations dont le nom resemble au nom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addRoleToUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addRoleToUser(params: {
    iduser: number;
    idrole: number;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.addRoleToUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation reinitializePass
   */
  static readonly ReinitializePassPath = '/tradeManagement/v1/utilisateurs/reinitializeAcess/';

  /**
   * réinitialiser le mot de passe'.
   *
   * cette methode permet de reinitialiser le mot de passe d'un utilisateur un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reinitializePass()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reinitializePass$Response(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.ReinitializePassPath, 'post');
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
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * réinitialiser le mot de passe'.
   *
   * cette methode permet de reinitialiser le mot de passe d'un utilisateur un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reinitializePass$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reinitializePass(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.reinitializePass$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation changeEmail
   */
  static readonly ChangeEmailPath = '/tradeManagement/v1/utilisateurs/changeEmail/';

  /**
   * changer l'email'.
   *
   * cette methode permet de changer l'email' d'un utilisateur un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeEmail()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeEmail$Response(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.ChangeEmailPath, 'post');
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
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * changer l'email'.
   *
   * cette methode permet de changer l'email' d'un utilisateur un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeEmail$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeEmail(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.changeEmail$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation changeAccess
   */
  static readonly ChangeAccessPath = '/tradeManagement/v1/utilisateurs/changeAcees/';

  /**
   * changer le mot de passe.
   *
   * cette methode permet de changer le mot de passe d'un utilisateur un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeAccess()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeAccess$Response(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.ChangeAccessPath, 'post');
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
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * changer le mot de passe.
   *
   * cette methode permet de changer le mot de passe d'un utilisateur un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeAccess$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeAccess(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.changeAccess$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation save1
   */
  static readonly Save1Path = '/tradeManagement/v1/utilisateurs/';

  /**
   * enregistrer un utilisateur.
   *
   * cette methode permet de enregistrer un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1$Response(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.Save1Path, 'post');
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
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * enregistrer un utilisateur.
   *
   * cette methode permet de enregistrer un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1(params: {
    body: UtilisateurDto
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.save1$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation findById1
   */
  static readonly FindById1Path = '/tradeManagement/v1/utilisateurs/{id}';

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher un utilisateur par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindById1Path, 'get');
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
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher un utilisateur par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: {
    id: number;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.findById1$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation delete1
   */
  static readonly Delete1Path = '/tradeManagement/v1/utilisateurs/{id}';

  /**
   * supprimer un utilisateur.
   *
   * cette methode permet de supprimer un utilisateur par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.Delete1Path, 'delete');
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
   * supprimer un utilisateur.
   *
   * cette methode permet de supprimer un utilisateur par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findByVille
   */
  static readonly FindByVillePath = '/tradeManagement/v1/utilisateurs/ville/{ville}';

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs resident dans une ville
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByVille()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByVille$Response(params: {
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindByVillePath, 'get');
    if (params) {
      rb.path('ville', params.ville, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs resident dans une ville
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByVille$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByVille(params: {
    ville: string;
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.findByVille$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation findByPrenom
   */
  static readonly FindByPrenomPath = '/tradeManagement/v1/utilisateurs/prenom/{prenom}';

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs dont le prenom resemble au prenom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPrenom()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenom$Response(params: {
    prenom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindByPrenomPath, 'get');
    if (params) {
      rb.path('prenom', params.prenom, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs dont le prenom resemble au prenom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPrenom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenom(params: {
    prenom: string;
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.findByPrenom$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation findByPays
   */
  static readonly FindByPaysPath = '/tradeManagement/v1/utilisateurs/pays/{pays}';

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs resuident dans un pays
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPays()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPays$Response(params: {
    pays: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindByPaysPath, 'get');
    if (params) {
      rb.path('pays', params.pays, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs resuident dans un pays
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPays$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPays(params: {
    pays: string;
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.findByPays$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation findByPaysAndVille
   */
  static readonly FindByPaysAndVillePath = '/tradeManagement/v1/utilisateurs/pays-ville/{pays}?{ville}';

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs resident dans un pays et dans une ville
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPaysAndVille()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPaysAndVille$Response(params: {
    pays: string;
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindByPaysAndVillePath, 'get');
    if (params) {
      rb.path('pays', params.pays, {});
      rb.path('ville', params.ville, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs resident dans un pays et dans une ville
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPaysAndVille$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPaysAndVille(params: {
    pays: string;
    ville: string;
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.findByPaysAndVille$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation findByNom
   */
  static readonly FindByNomPath = '/tradeManagement/v1/utilisateurs/nom/{nom}';

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs dont le nom resemble au nom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByNom()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom$Response(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindByNomPath, 'get');
    if (params) {
      rb.path('nom', params.nom, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs dont le nom resemble au nom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByNom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.findByNom$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation lockAccount
   */
  static readonly LockAccountPath = '/tradeManagement/v1/utilisateurs/lockAccount/{id}';

  /**
   * bloquer un utilisateur.
   *
   * cette methode permet de bloquer un utilisateur par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `lockAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  lockAccount$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.LockAccountPath, 'get');
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
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * bloquer un utilisateur.
   *
   * cette methode permet de bloquer un utilisateur par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `lockAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  lockAccount(params: {
    id: number;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.lockAccount$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation findByEntrepriseId
   */
  static readonly FindByEntrepriseIdPath = '/tradeManagement/v1/utilisateurs/identreprise/{idEntreprise}';

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs appartenant a l'entreprise dont l'id est passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByEntrepriseId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEntrepriseId$Response(params: {
    idEntreprise: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindByEntrepriseIdPath, 'get');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher les utilisateurs appartenant a l'entreprise dont l'id est passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByEntrepriseId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEntrepriseId(params: {
    idEntreprise: number;
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.findByEntrepriseId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation findByPasswordAndIdIs
   */
  static readonly FindByPasswordAndIdIsPath = '/tradeManagement/v1/utilisateurs/find/passwordIs/{password}/{id}';

  /**
   * rechercher une organisation.
   *
   * cette methode permet de rechercher les organisations dont le nom resemble au nom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPasswordAndIdIs()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPasswordAndIdIs$Response(params: {
    password: string;
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindByPasswordAndIdIsPath, 'get');
    if (params) {
      rb.path('password', params.password, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * rechercher une organisation.
   *
   * cette methode permet de rechercher les organisations dont le nom resemble au nom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPasswordAndIdIs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPasswordAndIdIs(params: {
    password: string;
    id: number;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.findByPasswordAndIdIs$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation findByEmailAndIdNot
   */
  static readonly FindByEmailAndIdNotPath = '/tradeManagement/v1/utilisateurs/find/emailNot/{email}/{id}';

  /**
   * rechercher un utilisateur par mail avec id different de celui specifié.
   *
   * cette methode permet de rechercher les organisations dont le nom resemble au nom passé en parametre
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByEmailAndIdNot()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmailAndIdNot$Response(params: {
    email: string;
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindByEmailAndIdNotPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * rechercher un utilisateur par mail avec id different de celui specifié.
   *
   * cette methode permet de rechercher les organisations dont le nom resemble au nom passé en parametre
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByEmailAndIdNot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmailAndIdNot(params: {
    email: string;
    id: number;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.findByEmailAndIdNot$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation findAll1
   */
  static readonly FindAll1Path = '/tradeManagement/v1/utilisateurs/find/all';

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher la liste des utilisateurs elle retourne la liste de tous les utilisateurs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindAll1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher la liste des utilisateurs elle retourne la liste de tous les utilisateurs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: {
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.findAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation findByEmail
   */
  static readonly FindByEmailPath = '/tradeManagement/v1/utilisateurs/email/{email}';

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher un utilisateur par son Email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail$Response(params: {
    email: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateurService.FindByEmailPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * rechercher un utilisateur.
   *
   * cette methode permet de rechercher un utilisateur par son Email
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail(params: {
    email: string;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.findByEmail$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

}
