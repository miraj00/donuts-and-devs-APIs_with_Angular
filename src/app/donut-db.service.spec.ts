import { TestBed } from '@angular/core/testing';

import { DonutDbService } from './donut-db.service';

describe('DonutDbService', () => {
  let service: DonutDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
