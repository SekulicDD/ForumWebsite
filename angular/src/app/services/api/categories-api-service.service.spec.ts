import { TestBed } from '@angular/core/testing';

import { CategoriesApiServiceService } from './categories-api-service.service';

describe('CategoriesApiServiceService', () => {
  let service: CategoriesApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
