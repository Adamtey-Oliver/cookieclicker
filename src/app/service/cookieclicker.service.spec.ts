import { TestBed } from '@angular/core/testing';

import { CookieclickerService } from './cookieclicker.service';

describe('CookieclickerService', () => {
  let service: CookieclickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieclickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
