import { TestBed } from '@angular/core/testing';

import { FrutaImagenService } from './fruta-imagen.service';

describe('FrutaImagenService', () => {
  let service: FrutaImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrutaImagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
