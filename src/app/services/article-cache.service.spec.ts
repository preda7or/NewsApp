import { TestBed, inject } from '@angular/core/testing';

import { ArticleCacheService } from './article-cache.service';

describe('ArticleCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleCacheService]
    });
  });

  it('should be created', inject([ArticleCacheService], (service: ArticleCacheService) => {
    expect(service).toBeTruthy();
  }));
});
