import { Observable } from 'rxjs/Observable';
import { AppSettings } from './../app-settings';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

import { IArticleListResponse } from '@app-models/transfer-objects/article-list-to';
import { IArticleResponse } from '@app-models/transfer-objects/article-to';
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
    return this.http.get<T>(AppSettings.API_URL + urlPath, config);
  }

  /**
   * ArticleList fetching and conversion
   */

  private mapArticleList(articles: IArticleListResponse) {
    return articles.response.results.map(a => {
      return {
        id: a.id,
        url: a.webUrl,
        title: a.webTitle,
        date: Date.parse(a.webPublicationDate)
      };
    });
  }

  public getArticleList(
    count?: number,
    page: number = 1
  ): Observable<ArticleList> {
    const config = {
      'order-by': 'newest',
      page: page,
      'page-size': count
    };
    return this.queryApi<IArticleListResponse>('search').map(
      this.mapArticleList
    );
  }

  /**
   * Article fetching and conversion
   */

  private mapArticle(article: IArticleResponse): Article {
    return {
      title: article.response.content.webTitle,
      body: article.response.content.fields.body,
      byline: article.response.content.fields.byline,
      date: new Date(article.response.content.webPublicationDate),
      url: article.response.content.webUrl,
      thumbnail: article.response.content.fields.thumbnail.replace(
        /500\.jpg$/i,
        '1000.jpg'
      )
    };
  }

  public getArticle(id: string): Observable<Article> {
    console.log('getting article:', id);

    if (!id.length) {
      return Observable.from(undefined);
    }

    const config = {
      'show-fields': 'body,byline,thumbnail'
    };

    const d = this.queryApi<IArticleResponse>(
      decodeURIComponent(id),
      config
    ).map(this.mapArticle);
    d.map(console.log);
    return d;
  }
}
