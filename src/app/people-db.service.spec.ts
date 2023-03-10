import { TestBed } from '@angular/core/testing';

import { PeopleDbService } from './people-db.service';

describe('PeopleDbService', () => {
  let service: PeopleDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
