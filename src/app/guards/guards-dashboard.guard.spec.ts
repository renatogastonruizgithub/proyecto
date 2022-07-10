import { TestBed } from '@angular/core/testing';

import { GuardsDashboardGuard } from './guards-dashboard.guard';

describe('GuardsDashboardGuard', () => {
  let guard: GuardsDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardsDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
