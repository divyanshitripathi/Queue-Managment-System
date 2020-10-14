import { TestBed } from '@angular/core/testing';

import { EmployeeAddtionService } from './employee-addtion.service';

describe('EmployeeAddtionService', () => {
  let service: EmployeeAddtionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAddtionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
