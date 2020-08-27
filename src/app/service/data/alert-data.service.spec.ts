import { TestBed } from '@angular/core/testing';

import { AlertDataService } from './alert-data.service';

describe('AlertDataService', () => {
  let service: AlertDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
