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

import { Permissions } from '../models/permissions';
import { RoleDto } from '../models/role-dto';


/**
 * API Role
 */
@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll3
   */
  static readonly FindAll3Path = '/tradeManagement/v1/roles/';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher la liste des roles elle retourne la liste de tous les roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<RoleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.FindAll3Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RoleDto>>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher la liste des roles elle retourne la liste de tous les roles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3(params?: {
  },
  context?: HttpContext

): Observable<Array<RoleDto>> {

    return this.findAll3$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>) => r.body as Array<RoleDto>)
    );
  }

  /**
   * Path part for operation save3
   */
  static readonly Save3Path = '/tradeManagement/v1/roles/';

  /**
   * enregistrer un role.
   *
   * cette methode permet de enregistrer un role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3$Response(params: {
    body: RoleDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.Save3Path, 'post');
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
        return r as StrictHttpResponse<RoleDto>;
      })
    );
  }

  /**
   * enregistrer un role.
   *
   * cette methode permet de enregistrer un role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3(params: {
    body: RoleDto
  },
  context?: HttpContext

): Observable<RoleDto> {

    return this.save3$Response(params,context).pipe(
      map((r: StrictHttpResponse<RoleDto>) => r.body as RoleDto)
    );
  }

  /**
   * Path part for operation findById3
   */
  static readonly FindById3Path = '/tradeManagement/v1/roles/{id}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.FindById3Path, 'get');
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
        return r as StrictHttpResponse<RoleDto>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3(params: {
    id: number;
  },
  context?: HttpContext

): Observable<RoleDto> {

    return this.findById3$Response(params,context).pipe(
      map((r: StrictHttpResponse<RoleDto>) => r.body as RoleDto)
    );
  }

  /**
   * Path part for operation delete3
   */
  static readonly Delete3Path = '/tradeManagement/v1/roles/{id}';

  /**
   * supprimer un role.
   *
   * cette methode permet de supprimer un role par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.Delete3Path, 'delete');
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
   * supprimer un role.
   *
   * cette methode permet de supprimer un role par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete3$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findAllPermissions
   */
  static readonly FindAllPermissionsPath = '/tradeManagement/v1/roles/permissions';

  /**
   * rechercher les permissions.
   *
   * cette methode permet de rechercher la liste des roles elle retourne la liste de tous les roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllPermissions()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPermissions$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Permissions>>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.FindAllPermissionsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Permissions>>;
      })
    );
  }

  /**
   * rechercher les permissions.
   *
   * cette methode permet de rechercher la liste des roles elle retourne la liste de tous les roles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllPermissions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPermissions(params?: {
  },
  context?: HttpContext

): Observable<Array<Permissions>> {

    return this.findAllPermissions$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Permissions>>) => r.body as Array<Permissions>)
    );
  }

  /**
   * Path part for operation findByRoleName
   */
  static readonly FindByRoleNamePath = '/tradeManagement/v1/roles/nom/{nom}';

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son nom
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByRoleName()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByRoleName$Response(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.FindByRoleNamePath, 'get');
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
        return r as StrictHttpResponse<RoleDto>;
      })
    );
  }

  /**
   * rechercher un role.
   *
   * cette methode permet de rechercher un role par son nom
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByRoleName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByRoleName(params: {
    nom: string;
  },
  context?: HttpContext

): Observable<RoleDto> {

    return this.findByRoleName$Response(params,context).pipe(
      map((r: StrictHttpResponse<RoleDto>) => r.body as RoleDto)
    );
  }

}
