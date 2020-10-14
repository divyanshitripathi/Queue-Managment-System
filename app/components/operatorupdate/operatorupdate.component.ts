import { Component, OnInit } from '@angular/core';
import { operatorupdate } from './operator-update';
import { HttpClient } from '@angular/common/http';
import { OperatorupdateService } from './operatorupdate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-operatorupdate',
  templateUrl: './operatorupdate.component.html',
  styleUrls: ['./operatorupdate.component.css']
})
export class OperatorupdateComponent implements OnInit {
  operator_update: operatorupdate;
  loading = false;
  submitted = false;
  errors = '';
  operatorForm: FormGroup;
  public data;
  public finalreport: any;
  public show: boolean = false;
  headElements = ['Employee_Id', 'Employee_Name', 'Employee_Last_Name', 'Employee_No.', 'Employee_Email', 'Designation', 'Address', 'City', 'Pin', 'Gender', 'Date Of Birth', 'Active Status', 'Joining Date', 'Leaving Date', 'UpDate'];



  constructor(private http: HttpClient, private operatorupdate1: OperatorupdateService, private formBuilder: FormBuilder, private router: Router) {
    this.operator_update = new operatorupdate;

  }

  ngOnInit(): void {
    this.operatorForm = this.formBuilder.group({
      Emp_Id: ['', Validators.required],
      Emp_Name: ['', Validators.required],
      Emp_Last_Name: ['', Validators.required],
      Emp_Email: ['', Validators.required],
      Emp_phone: ['', Validators.required],
      Designation: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required],
      Date_of_Birth: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  get f() { return this.operatorForm.controls; }

  search() {
    this.operatorupdate1.filters().subscribe(data => {
      console.log(data);
      this.finalreport = data;
    });
  }

  Update() {
    this.submitted = true;
    if (this.operatorForm.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.operator_update)
    this.operatorupdate1.Update_operator(this.operator_update)
      .subscribe(data => {
        console.log("data saved");
        alert("Empolyee Data Updated");
      })

    return this.router.navigateByUrl("login/DashBoard");
  }

  showfunction() {
    this.show = !this.show;
  }



}
