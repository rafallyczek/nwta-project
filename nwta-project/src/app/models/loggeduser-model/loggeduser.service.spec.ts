import { TestBed } from '@angular/core/testing';

import { LoggedUser } from './loggeduser.service';

describe('LoggeduserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggedUser = TestBed.get(LoggedUser);
    expect(service).toBeTruthy();
  });
});
