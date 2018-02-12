import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ArticleList } from '@app-models/data-objects/article-list-do';
import { ArticlesService } from '@app-services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  //
  articleList: ArticleList;

  constructor(private articleService: ArticlesService) {}

  ngOnInit() {
    this.articleService
      .getArticleList()
      .subscribe(articles => (this.articleList = articles));
  }
}
