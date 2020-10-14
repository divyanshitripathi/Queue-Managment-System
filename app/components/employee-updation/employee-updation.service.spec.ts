import { TestBed } from '@angular/core/testing';

import { EmployeeUpdationService } from './employee-updation.service';

describe('EmployeeUpdationService', () => {
  let service: EmployeeUpdationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeUpdationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
