import { TestBed } from '@angular/core/testing';

import { FriendsApiService } from './friends-api.service';

describe('FriendsApiService', () => {
  let service: FriendsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
