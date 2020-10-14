import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddtionComponent } from './employee-addtion.component';

describe('EmployeeAddtionComponent', () => {
  let component: EmployeeAddtionComponent;
  let fixture: ComponentFixture<EmployeeAddtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
