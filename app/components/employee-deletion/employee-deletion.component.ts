import { Component, OnInit } from '@angular/core';
import { employeedelete } from './employee-deletion';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeDeletionService } from './employee-deletion.service';

@Component({
  selector: 'app-employee-deletion',
  templateUrl: './employee-deletion.component.html',
  styleUrls: ['./employee-deletion.component.css']
})
export class EmployeeDeletionComponent implements OnInit {
  employeedeletionobject: employeedelete;
  loading = false;
  submitted = false;
  errors = '';
  operatordeletion2Form: FormGroup;


  constructor(private http: HttpClient, private formBuilder: FormBuilder, private deletion1: EmployeeDeletionService) {
    this.employeedeletionobject = new employeedelete;
  }

  ngOnInit(): void {
    this.operatordeletion2Form = this.formBuilder.group({
      operator_id: ['', Validators.required],
      Reason_of_disassignment: ['', Validators.required],
      disassigned_date: ['', Validators.required],
    });
  }

  get f() { return this.operatordeletion2Form.controls; }

  Delete() {
    this.submitted = true;
    if (this.operatordeletion2Form.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.employeedeletionobject)
    this.deletion1.submit(this.employeedeletionobject)
      .subscribe(data => {
        console.log("data saved");
      })
    alert("Empolyee Data Saved");
  }


  onReset() {
    this.operatordeletion2Form.reset();
  }

}
