import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDeleteComponent } from './counter-delete.component';

describe('CounterDeleteComponent', () => {
  let component: CounterDeleteComponent;
  let fixture: ComponentFixture<CounterDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
