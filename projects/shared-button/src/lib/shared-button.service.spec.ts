import { TestBed } from '@angular/core/testing';

import { SharedButtonService } from './shared-button.service';

describe('SharedButtonService', () => {
  let service: SharedButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
