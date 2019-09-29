import { TestBed } from '@angular/core/testing';

import { CompleteServiceService } from './complete-service.service';

describe('CompleteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompleteServiceService = TestBed.get(CompleteServiceService);
    expect(service).toBeTruthy();
  });
});
