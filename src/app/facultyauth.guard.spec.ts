import { TestBed } from '@angular/core/testing';

import { FacultyauthGuard } from './facultyauth.guard';

describe('FacultyauthGuard', () => {
  let guard: FacultyauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FacultyauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
