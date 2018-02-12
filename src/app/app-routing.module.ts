import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './components/articles/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { HomeComponent } from '@app-components/home/home.component';
import { ArticleResolver } from '@app-services/article.resolver';
import { ArticleGuard } from '@app-services/article.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'articles',
    component: ArticlesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ArticleComponent,
        resolve: { article: ArticleResolver }
      },
      {
        path: ':id',
        component: ArticleComponent,
        canActivate: [ArticleGuard],
        resolve: { article: ArticleResolver }
      }
      // {
      //   path: '**',
      //   component: ArticleComponent,
      //   canActivate: [ArticleGuard],
      //   resolve: { article: ArticleResolver }
      // }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // , { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
