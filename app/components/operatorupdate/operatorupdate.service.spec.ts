import { TestBed } from '@angular/core/testing';

import { OperatorupdateService } from './operatorupdate.service';

describe('OperatorupdateService', () => {
  let service: OperatorupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
