import { TestBed, inject } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { HttpClientModule } from '@angular/common/http';

describe('ArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesService],
      imports: [HttpClientModule]
    });
  });

  it(
    'should be created',
    inject([ArticlesService], (service: ArticlesService) => {
      expect(service).toBeTruthy();
    })
  );
});
