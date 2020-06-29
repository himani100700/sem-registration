import { TestBed } from '@angular/core/testing';

import { TokenInterceptorFacultyService } from './token-interceptor-faculty.service';

describe('TokenInterceptorFacultyService', () => {
  let service: TokenInterceptorFacultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptorFacultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
