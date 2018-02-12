import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { Article } from '@app-models/data-objects/article-do';
import { ArticlesService } from '@app-services/articles.service';
import { ArticleCacheService } from '@app-services/article-cache.service';

@Injectable()
export class ArticleResolver implements Resolve<Article> {
  constructor(
    private router: Router,
    private articlesService: ArticlesService,
    private cacheService: ArticleCacheService
  ) {}

  private navigateToArticle(route: ActivatedRouteSnapshot, id: string) {
    const urlSegments = [...route.parent.url.map(seg => seg.path), id];
    this.router.navigate(urlSegments);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    const routeId = route.paramMap.get('id');

    if (routeId == null) {
      // we are in articles root, no article selected yet, select the first one
      return this.articlesService.getFirstId().map(id => {
        this.navigateToArticle(route, id);
        return null;
      });
    } else {
      // First check cache, probably the guard loaded the artice
      const article = this.cacheService.fetch(routeId);
      if (article != null) {
        return Observable.of(article);
      }

      // Load selected article or redirect if error received from API
      return this.articlesService
        .getArticle(routeId)
        .catch((err: HttpErrorResponse) => {
          if (console) {
            console.error('Invalid article, trying to redirect to first one!');
          }
          return this.articlesService.getFirstId().map(id => {
            if (id === routeId) {
              if (console) {
                console.error(
                  'Could not load first article, nowhere to redirect!'
                );
              }
              return null;
            } else {
              this.navigateToArticle(route, id);
              return null;
            }
          });
        });
    }
  }
}
