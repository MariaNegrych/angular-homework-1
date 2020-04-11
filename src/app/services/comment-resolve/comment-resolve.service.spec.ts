import { TestBed } from '@angular/core/testing';

import { CommentResolveService } from './comment-resolve.service';

describe('CommentResolveService', () => {
  let service: CommentResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
