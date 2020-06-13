import { TestBed } from '@angular/core/testing';

import { CreatestdService } from './createstd.service';

describe('CreatestdService', () => {
  let service: CreatestdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatestdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
