import { TestBed } from '@angular/core/testing';

import { EventosResourceService } from './eventos-resource.service';

describe('EventosResourceService', () => {
  let service: EventosResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventosResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
