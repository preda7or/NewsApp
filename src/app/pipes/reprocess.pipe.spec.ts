import { ReprocessPipe } from './reprocess.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';

describe('ReprocessPipe', () => {
  let sanitizer;

  beforeEach(
    inject([DomSanitizer], _sanitizer => {
      sanitizer = _sanitizer;
    })
  );

  it('create an instance', () => {
    const pipe = new ReprocessPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
