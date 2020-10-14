import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAdditionComponent } from './counter-addition.component';

describe('CounterAdditionComponent', () => {
  let component: CounterAdditionComponent;
  let fixture: ComponentFixture<CounterAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
