import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { counteraddtion } from './counter_Addtion';
import { HttpClient } from '@angular/common/http';
import { CounterAddtionService } from './counter-addtion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter-addition',
  templateUrl: './counter-addition.component.html',
  styleUrls: ['./counter-addition.component.css']
})
export class CounterAdditionComponent implements OnInit {
  counteraddtionobject: counteraddtion;
  loading = false;
  submitted = false;
  errors = '';
  counteraddtionForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private counteraddtion1: CounterAddtionService, private router: Router) {
    this.counteraddtionobject = new counteraddtion;
  }

  ngOnInit(): void {
    this.counteraddtionForm = this.formBuilder.group({
      counter_no: ['', Validators.required],
      counter_type: ['', Validators.required],


    });
  }

  get f() { return this.counteraddtionForm.controls; }

  Add() {
    this.submitted = false;
    if (this.counteraddtionForm.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.counteraddtionobject)
    this.counteraddtion1.submit(this.counteraddtionobject)
      .subscribe(data => {
        console.log("data saved");
        if (data["response"] == 0) {
          this.loading = true;
          alert("Data Saved");
          return this.router.navigateByUrl("counterAddtion")
        }
        else {
          alert("The counter no exisits");
          return this.router.navigateByUrl("counterAddtion")
        }
      })
  }


  onReset() {
    this.counteraddtionForm.reset();
  }


}
