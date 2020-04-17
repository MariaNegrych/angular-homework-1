import { TestBed } from '@angular/core/testing';

import { TodosResolveService } from './todos-resolve.service';

describe('TodosResolveService', () => {
  let service: TodosResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
