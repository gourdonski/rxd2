import { TestBed, inject } from '@angular/core/testing';

import { BungieApiService } from './bungie-api.service';

describe('BungieApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BungieApiService]
    });
  });

  it('should be created', inject([BungieApiService], (service: BungieApiService) => {
    expect(service).toBeTruthy();
  }));
});
