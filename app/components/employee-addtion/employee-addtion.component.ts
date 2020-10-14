import { Component, OnInit } from '@angular/core';
import { employeeaddtion } from './employe-addtion';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeAddtionService } from './employee-addtion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-addtion',
  templateUrl: './employee-addtion.component.html',
  styleUrls: ['./employee-addtion.component.css']
})
export class EmployeeAddtionComponent implements OnInit {
  employeeaddtionobject: employeeaddtion;
  loading = false;
  submitted = false;
  errors = '';
  operatoraddtion2Form: FormGroup;


  constructor(private http: HttpClient, private formBuilder: FormBuilder, private addtion1: EmployeeAddtionService, private router: Router) {
    this.employeeaddtionobject = new employeeaddtion;
  }

  ngOnInit(): void {
    this.operatoraddtion2Form = this.formBuilder.group({
      operator_Name: ['', Validators.required],
      operator_Last_Name: ['', Validators.required],
      emp_id: ['', Validators.required],
      task_assigned: ['', Validators.required],
      counter_assigned: ['', Validators.required],
      assigned_date: ['', Validators.required],


    });
  }

  get f() { return this.operatoraddtion2Form.controls; }

  Add() {
    this.submitted = false;
    if (this.operatoraddtion2Form.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.employeeaddtionobject)
    this.addtion1.submit(this.employeeaddtionobject)
      .subscribe(data => {
        console.log("data saved");
        if (data["response"] == 0) {
          this.loading = true;
          alert("Data Saved");
          return this.router.navigateByUrl("operator2Addtion")
        }
        else {
          alert("Choose other counter");
          return this.router.navigateByUrl("operator2Addtion")
        }
      })

  }


  onReset() {
    this.operatoraddtion2Form.reset();
  }


}
