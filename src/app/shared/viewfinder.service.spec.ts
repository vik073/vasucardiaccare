import { TestBed } from '@angular/core/testing';

import { ViewfinderService } from './viewfinder.service';

describe('ViewfinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewfinderService = TestBed.get(ViewfinderService);
    expect(service).toBeTruthy();
  });
});
