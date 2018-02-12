import { Component, Input, OnInit } from '@angular/core';
import {
  Router,
  ActivationEnd,
  NavigationStart,
  ActivatedRoute,
  NavigationEnd,
  NavigationCancel,
  ChildActivationEnd
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ArticlesService } from '@app-services/articles.service';
import { Article } from '@app-models/data-objects/article-do';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article.component.html',
  styles: ['::ng-deep p {text-indent:.6em;}']
})
export class ArticleComponent implements OnInit {
  //
  article: Article | null;
  prevArticle: Article;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Router subscription has to be in constructore otherwise not called in time for the inital ur

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.prevArticle = this.article;
        this.article = null;
      }

      if (event instanceof NavigationCancel) {
        this.article = this.prevArticle;
      }

      if (
        event instanceof ActivationEnd &&
        event.snapshot.component &&
        event.snapshot.component['name'] === 'ArticleComponent'
      ) {
        if ('article' in this.route.snapshot.data) {
          this.article = this.route.snapshot.data.article;
        }
      }
    });
  }

  ngOnInit() {}
}
