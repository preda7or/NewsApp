import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ArticlesService } from '@app-services/articles.service';
import { Article } from '@app-models/data-objects/article-do';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit {
  //
  // article: Observable<Article>;
  article: Article;

  constructor(private articles: ArticlesService, private router: Router) {
    // console.log(route.snapshot.params['id']);
    router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        if ('id' in event.snapshot.params) {
          // this.article = this.articles.getArticle(event.snapshot.params.id);
          this.articles
            .getArticle(event.snapshot.params.id)
            .subscribe(article => (this.article = article));
        }
      }
    });
  }
  ngOnInit() {}
}
