import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './../app-settings';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {
  IArticleListResponse,
  mapArticleList
} from '@app-models/transfer-objects/article-list-to';
import {
  IArticleResponse,
  mapArticle
} from '@app-models/transfer-objects/article-to';
import { ArticleList } from '@app-models/data-objects/article-list-do';
import { Article } from '@app-models/data-objects/article-do';

@Injectable()
export class ArticlesService {
  //
  constructor(private http: HttpClient) {}

  private queryApi<T>(
    urlPath: string,
    queryparams?: { [key: string]: any }
  ): Observable<T> {
    const config = {
      params: {
        'api-key': AppSettings.API_KEY
      }
    };
    Object.assign(config.params, queryparams);
    // console.log(
    //   'query:',
    //   `${AppSettings.API_URL}${urlPath}?api-key=${config.params['api-key']}`
    // );
    return this.http
      .get<T>(`${AppSettings.API_URL}/${urlPath}`, config)
      .map(data => {
        // console.log('success');
        return data;
      });
  }

  /**
   * @param pageSize Page size, number of articles on a page
   * @param page Page number to get
   */
  public getArticleList(
    page: number = 1,
    pageSize: number = 10
  ): Observable<ArticleList> {
    const config = {
      'order-by': 'newest',
      page: page,
      'page-size': pageSize
    };
    return this.queryApi<IArticleListResponse>('search', config).map(
      mapArticleList
    );
  }

  public getFirstId(): Observable<string> {
    return this.getArticleList().map(articleList => {
      return articleList && articleList.length ? articleList[0].id : '';
    });
  }

  /**
   * @param id URI encoded path for the selected articles
   */
  public getArticle(id: string): Observable<Article> {
    // if (id == null || !id.length) {
    //   return Observable.empty();
    // }

    const config = {
      'show-fields': 'body,byline,thumbnail'
    };

    return this.queryApi<IArticleResponse>(id, config).map(mapArticle);
  }
}
