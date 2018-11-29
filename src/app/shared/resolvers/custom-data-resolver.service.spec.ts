import { TestBed } from '@angular/core/testing';

import { CustomDataResolverService } from './custom-data-resolver.service';

describe('CustomDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomDataResolverService = TestBed.get(CustomDataResolverService);
    expect(service).toBeTruthy();
  });
});
