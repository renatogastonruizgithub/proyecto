import { TestBed } from '@angular/core/testing';

import { LoaderDashboardService } from './loader-dashboard.service';

describe('LoaderDashboardService', () => {
  let service: LoaderDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
