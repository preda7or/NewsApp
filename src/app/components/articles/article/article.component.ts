import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit {
  //
  @Input() articleId: any;

  constructor() {}

  ngOnInit() {}
}
