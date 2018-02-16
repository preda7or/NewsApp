import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { BigthumbPipe } from '@app-pipes/bigthumb.pipe';
import { ReprocessPipe } from '@app-pipes/reprocess.pipe';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { CleanUrlPipe } from '@app-pipes/cleanurl.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          ArticleComponent,
          BigthumbPipe,
          ReprocessPipe,
          CleanUrlPipe,
          TimeAgoPipe
        ],
        imports: [
          RouterModule.forRoot([{ path: '', component: ArticleComponent }])
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
