import { TestBed } from '@angular/core/testing';

import { RoutGuardsService } from './rout-guards.service';

describe('RoutGuardsService', () => {
  let service: RoutGuardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutGuardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
