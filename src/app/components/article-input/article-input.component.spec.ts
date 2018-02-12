import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInputComponent } from './article-input.component';
import { RouterModule } from '@angular/router';
import { EscapePipe } from '@app-pipes/escape.pipe';
import { ArticlesService } from '@app-services/articles.service';
import { APP_BASE_HREF } from '@angular/common';
import { CleanUrlPipe } from '@app-pipes/cleanurl.pipe';

describe('ArticleInputComponent', () => {
  let component: ArticleInputComponent;
  let fixture: ComponentFixture<ArticleInputComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ArticleInputComponent, EscapePipe, CleanUrlPipe],
        imports: [
          RouterModule.forRoot([{ path: '', component: ArticleInputComponent }])
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
