import { TestBed } from '@angular/core/testing';

import { UserDeviceTokenService } from './user-device-token.service';

describe('UserDeviceTokenService', () => {
  let service: UserDeviceTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDeviceTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
