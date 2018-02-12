import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CleanUrlPipe } from '@app-pipes/cleanurl.pipe';

@Component({
  selector: 'app-article-input',
  templateUrl: './article-input.component.html',
  styleUrls: ['./article-input.component.scss']
})
export class ArticleInputComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onSubmit(url: string) {
    const articleId = new CleanUrlPipe().transform(url);
    this.router.navigate(['.', articleId], { relativeTo: this.activatedRoute });
    return false;
  }
}
