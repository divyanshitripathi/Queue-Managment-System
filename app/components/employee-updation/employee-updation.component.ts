import { Component, OnInit } from '@angular/core';
import { employeeupdation } from './employee-updation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeUpdationService } from './employee-updation.service';

@Component({
  selector: 'app-employee-updation',
  templateUrl: './employee-updation.component.html',
  styleUrls: ['./employee-updation.component.css']
})
export class EmployeeUpdationComponent implements OnInit {
  employeeupdationobject: employeeupdation;
  loading = false;
  submitted = false;
  errors = '';
  operatorupdation2Form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private updation1: EmployeeUpdationService) {
    this.employeeupdationobject = new employeeupdation;
  }

  ngOnInit(): void {
    this.operatorupdation2Form = this.formBuilder.group({
      operator_id: ['', Validators.required],
      counter_updated: ['', Validators.required],
      assigned_date_updated: ['', Validators.required],

    });

  }

  get f() { return this.operatorupdation2Form.controls; }

  Update() {
    this.submitted = false;
    if (this.operatorupdation2Form.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.employeeupdationobject);
    this.updation1.submit(this.employeeupdationobject)
      .subscribe(data => {
        console.log("data saved");
        alert("Empolyee Data Saved");
      });

  }


  onReset() {
    this.operatorupdation2Form.reset();
  }

}
