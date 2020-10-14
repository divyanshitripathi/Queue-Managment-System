import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDeleteComponent } from './operator-delete.component';

describe('OperatorDeleteComponent', () => {
  let component: OperatorDeleteComponent;
  let fixture: ComponentFixture<OperatorDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
