import { TestBed } from '@angular/core/testing';

import { OppSerService } from './opp-ser.service';

describe('OppSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OppSerService = TestBed.get(OppSerService);
    expect(service).toBeTruthy();
  });
});
