import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleInputComponent } from '@app-components/article-input/article-input.component';
import { ArticleComponent } from '@app-components/articles/article/article.component';
import { ArticlesComponent } from '@app-components/articles/articles.component';
import { ListComponent } from '@app-components/articles/list/list.component';
import { HomeComponent } from '@app-components/home/home.component';
import { NavbarComponent } from '@app-components/navbar/navbar.component';
import { PageNotFoundComponent } from '@app-components/page-not-found/page-not-found.component';
import { BigthumbPipe } from '@app-pipes/bigthumb.pipe';
import { CleanUrlPipe } from '@app-pipes/cleanurl.pipe';
import { EscapePipe } from '@app-pipes/escape.pipe';
import { ReprocessPipe } from '@app-pipes/reprocess.pipe';
import { ArticleCacheService } from '@app-services/article-cache.service';
import { ArticleGuard } from '@app-services/article.guard';
import { ArticleResolver } from '@app-services/article.resolver';
import { ArticlesService } from '@app-services/articles.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ListComponent,
    ArticleComponent,
    PageNotFoundComponent,
    NavbarComponent,
    EscapePipe,
    ReprocessPipe,
    ArticleInputComponent,
    HomeComponent,
    BigthumbPipe,
    CleanUrlPipe,
    TimeAgoPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    ArticlesService,
    ArticleResolver,
    ArticleGuard,
    ArticleCacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
