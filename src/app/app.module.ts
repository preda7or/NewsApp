import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ListComponent } from './components/articles/list/list.component';
import { ArticleComponent } from './components/articles/article/article.component';

import { ArticlesService } from './services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { EscapePipe } from './pipes/escape.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ListComponent,
    ArticleComponent,
    PageNotFoundComponent,
    NavbarComponent,
    EscapePipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
