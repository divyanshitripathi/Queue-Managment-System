import { TestBed } from '@angular/core/testing';

import { EmployeeDeletionService } from './employee-deletion.service';

describe('EmployeeDeletionService', () => {
  let service: EmployeeDeletionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDeletionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
