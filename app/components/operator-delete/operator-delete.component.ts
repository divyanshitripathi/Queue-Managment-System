import { Component, OnInit } from '@angular/core';
import { operator_delete } from './operator-delete';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperatordeleteService } from './operatordelete.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-operator-delete',
  templateUrl: './operator-delete.component.html',
  styleUrls: ['./operator-delete.component.css']
})
export class OperatorDeleteComponent implements OnInit {
  operatordelete: operator_delete;
  loading = false;
  submitted = false;
  errors = '';
  operatordeleteForm: FormGroup;

  constructor(private http: HttpClient, private operatordelete1: OperatordeleteService, private formBuilder: FormBuilder) {
    this.operatordelete = new operator_delete;
  }

  ngOnInit(): void {
    this.operatordeleteForm = this.formBuilder.group({
      Emp_id: ['', Validators.required],
      reason: ['', Validators.required],
      Date_Of_Leaving: ['', Validators.required],

    });
  }

  get f() { return this.operatordeleteForm.controls; }

  Delete() {
    this.submitted = false;
    if (this.operatordeleteForm.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.operatordelete)
    this.operatordelete1.submit(this.operatordelete)
      .subscribe(data => {
        console.log("data saved");
        alert("Empolyee Data Saved");
      })

  }


  onReset() {
    this.operatordeleteForm.reset();
  }

}

