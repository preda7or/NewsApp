import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ArticlesService } from '@app-services/articles.service';
import { ArticleCacheService } from '@app-services/article-cache.service';

@Injectable()
export class ArticleGuard implements CanActivate {
  //
  constructor(
    private articlesService: ArticlesService,
    private cacheService: ArticleCacheService
  ) {}

  /**
   * Guard is checking if the next route is a valid article and only then navigates
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    //
    const routeId = route.paramMap.get('id');

    if (routeId == null) {
      return true;
    }

    return this.articlesService
      .getArticle(routeId)
      .map(article => {
        const valid = !!article;
        if (valid) {
          this.cacheService.store(routeId, article);
        }
        return valid;
      })
      .catch(err => {
        return Observable.of(false);
      });
  }
}
