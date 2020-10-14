import { TestBed } from '@angular/core/testing';

import { OperatordeleteService } from './operatordelete.service';

describe('OperatordeleteService', () => {
  let service: OperatordeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatordeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
