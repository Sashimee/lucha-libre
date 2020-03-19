import { TestBed } from '@angular/core/testing';

import { WreslerService } from './wresler.service';

describe('WreslerService', () => {
  let service: WreslerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WreslerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
