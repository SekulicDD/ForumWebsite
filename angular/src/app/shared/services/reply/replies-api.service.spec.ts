import { TestBed } from '@angular/core/testing';

import { RepliesApiService } from './replies-api.service';

describe('RepliesApiService', () => {
  let service: RepliesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepliesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
