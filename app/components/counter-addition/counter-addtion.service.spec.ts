import { TestBed } from '@angular/core/testing';

import { CounterAddtionService } from './counter-addtion.service';

describe('CounterAddtionService', () => {
  let service: CounterAddtionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterAddtionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
