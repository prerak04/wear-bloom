import { TestBed } from '@angular/core/testing';

import { AppllicationService } from './appllication.service';

describe('AppllicationService', () => {
  let service: AppllicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppllicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
