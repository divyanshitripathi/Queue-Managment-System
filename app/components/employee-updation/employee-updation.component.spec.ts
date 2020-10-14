import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdationComponent } from './employee-updation.component';

describe('EmployeeUpdationComponent', () => {
  let component: EmployeeUpdationComponent;
  let fixture: ComponentFixture<EmployeeUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
