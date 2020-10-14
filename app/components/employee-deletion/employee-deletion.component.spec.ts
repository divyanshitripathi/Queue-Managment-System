import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeletionComponent } from './employee-deletion.component';

describe('EmployeeDeletionComponent', () => {
  let component: EmployeeDeletionComponent;
  let fixture: ComponentFixture<EmployeeDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
