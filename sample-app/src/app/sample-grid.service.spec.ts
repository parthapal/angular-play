import { TestBed, inject } from '@angular/core/testing';

import { SampleGridService } from './sample-grid.service';

describe('SampleGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleGridService]
    });
  });

  it('should be created', inject([SampleGridService], (service: SampleGridService) => {
    expect(service).toBeTruthy();
  }));
});
