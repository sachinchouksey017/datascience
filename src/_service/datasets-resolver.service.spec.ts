import { TestBed, inject } from '@angular/core/testing';

import { DatasetsResolverService } from './datasets-resolver.service';

describe('DatasetsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasetsResolverService]
    });
  });

  it('should be created', inject([DatasetsResolverService], (service: DatasetsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
