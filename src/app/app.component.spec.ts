import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@app-components/navbar/navbar.component';
import { ArticlesComponent } from '@app-components/articles/articles.component';
import { ArticleInputComponent } from '@app-components/article-input/article-input.component';
import { ListComponent } from '@app-components/articles/list/list.component';
import { ArticleComponent } from '@app-components/articles/article/article.component';
import { BigthumbPipe } from '@app-pipes/bigthumb.pipe';
import { ReprocessPipe } from '@app-pipes/reprocess.pipe';
import { EscapePipe } from '@app-pipes/escape.pipe';
import { ArticlesService } from '@app-services/articles.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@app-components/home/home.component';
import { PageNotFoundComponent } from '@app-components/page-not-found/page-not-found.component';
import { APP_BASE_HREF } from '@angular/common';
import { CleanUrlPipe } from '@app-pipes/cleanurl.pipe';
import { ArticleResolver } from '@app-services/article.resolver';
import { ArticleGuard } from '@app-services/article.guard';
import { TimeAgoPipe } from 'time-ago-pipe';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          HomeComponent,
          PageNotFoundComponent,
          NavbarComponent,
          ArticlesComponent,
          ListComponent,
          ArticleComponent,
          ArticleInputComponent,
          BigthumbPipe,
          ReprocessPipe,
          EscapePipe,
          CleanUrlPipe,
          TimeAgoPipe
        ],
        imports: [RouterModule, AppRoutingModule],
        providers: [
          ArticlesService,
          ArticleResolver,
          ArticleGuard,
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as brandName 'News App'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.brandName).toEqual('News App');
    })
  );
  it(
    'should render header and main',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('header')).not.toBeNull();
      expect(compiled.querySelector('main')).not.toBeNull();
    })
  );
});
