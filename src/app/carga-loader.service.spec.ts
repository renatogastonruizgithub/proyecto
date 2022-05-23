import { TestBed } from '@angular/core/testing';

import { CargaLoaderService } from './carga-loader.service';

describe('CargaLoaderService', () => {
  let service: CargaLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
