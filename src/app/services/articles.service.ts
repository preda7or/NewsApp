import { AppSettings } from './../app-settings';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {
  //
  constructor() {
    console.log(AppSettings.API_KEY);
  }

  getArticleList() {}
}
