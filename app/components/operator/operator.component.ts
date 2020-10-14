import { Component, OnInit } from '@angular/core';
import { operator } from './operator-model';
import { HttpClient } from '@angular/common/http';
import { OperatorService } from './operator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  operatorsubmit: operator;
  loading = false;
  submitted = false;
  errors = '';
  operatorForm: FormGroup;


  constructor(private http: HttpClient, private operatoradd: OperatorService, private formBuilder: FormBuilder) {
    this.operatorsubmit = new operator;

  }

  ngOnInit(): void {
    this.operatorForm = this.formBuilder.group({
      Emp_Name: ['', Validators.required],
      Emp_Last_Name: ['', Validators.required],
      Emp_Email: ['', Validators.required],
      Emp_phone: ['', Validators.required],
      designation_name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required],
      Date_of_Birth: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  get f() { return this.operatorForm.controls; }

  add() {
    this.submitted = false;
    if (this.operatorForm.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.operatorsubmit)
    this.operatoradd.submit(this.operatorsubmit)
      .subscribe(data => {
        console.log("data saved");
        alert("Empolyee Data Saved");
      });

  }


  onReset() {
    this.operatorForm.reset();
  }



}
