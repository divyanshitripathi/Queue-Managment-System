import { Component, OnInit } from '@angular/core';
import { signup } from './signup.model';
import { HttpClient } from '@angular/common/http';
import { SignupService } from './signup.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { confirmedvalidator } from './confirmedvalidators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupobj: signup;
  signupform: FormGroup;
  submitted: false;
  loading: false;
  returnurl: string;





  constructor(private http: HttpClient, private signup1: SignupService, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router) {
    this.signupobj = new signup;
  }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      emp_Name: ['', Validators.required],
      emp_last_name: ['', Validators.required],
      user_name: ['', Validators.required],
      passsword: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: confirmedvalidator('passsword', 'confirmPassword')
    });
  }



  get f() { return this.signupform.controls; }


  onsubmit() {
    if (this.signupform.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.signupobj);
    this.signup1.signup2(this.signupobj)
      .subscribe(data => {
        console.log("data saved");
        if (data["response"] == 0) {
          this.loading = false;
          alert("Already Exists");
          return this.router.navigateByUrl("/login")
        }
        else {
          alert("Data Saved");
          return this.router.navigateByUrl("/login")
        }
      });
  }


  onReset() {
    this.submitted = false;
    this.signupform.reset();
  }
}
