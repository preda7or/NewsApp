import { Injectable } from '@angular/core';
import { Article } from '@app-models/data-objects/article-do';

@Injectable()
export class ArticleCacheService {
  private cache: Map<string, Article>;

  constructor() {
    this.cache = new Map<string, Article>();
  }

  store(id: string, article: Article): void {
    this.cache.clear(); // TODO: Now clear for simplicity, but should keep a healthy cache size
    const copy = Object.assign({}, article);
    this.cache.set(id, copy);
  }

  fetch(id: string): Article | undefined {
    return this.cache.get(id);
  }
}
