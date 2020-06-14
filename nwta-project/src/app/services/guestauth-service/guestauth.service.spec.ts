import { TestBed } from '@angular/core/testing';

import { GuestauthService } from './guestauth.service';

describe('GuestauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestauthService = TestBed.get(GuestauthService);
    expect(service).toBeTruthy();
  });
});
