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


/**
 * API photo
 */
@Injectable({
  providedIn: 'root',
})
export class PhotoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation savePhoto
   */
  static readonly SavePhotoPath = '/tradeManagement/v1/photos/{context}?{id}';

  /**
   * rechercher un article.
   *
   * cette methode permet de mettre a jour la photo d'une entité par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePhoto()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePhoto$Response(params: {
    context: string;
    id: number;
    body?: {
'file': Blob;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, PhotoService.SavePhotoPath, 'post');
    if (params) {
      rb.path('context', params.context, {});
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `savePhoto$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePhoto(params: {
    context: string;
    id: number;
    body?: {
'file': Blob;
}
  },
  context?: HttpContext

): Observable<{
}> {

    return this.savePhoto$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

}
