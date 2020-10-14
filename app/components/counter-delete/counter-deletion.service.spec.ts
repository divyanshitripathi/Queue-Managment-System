import { TestBed } from '@angular/core/testing';

import { CounterDeletionService } from './counter-deletion.service';

describe('CounterDeletionService', () => {
  let service: CounterDeletionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterDeletionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
