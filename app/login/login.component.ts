import { Component, OnInit } from '@angular/core';
import { login } from './login-model';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: login;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  registerForm: FormGroup;



  constructor(private http: HttpClient, private login1: LoginService, private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) {
    this.loginform = new login;


  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      User_Name: ['', Validators.required],
      Password: ['', Validators.required]
    });

    // redirect to home if already logged in
    /*if (this.login1.currentUserValue) {
      this.router.navigate(['']);
    }*/
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  onsubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.loginform)
    this.login1.loginup(this.loginform)
      .subscribe(
        data => {
          console.log(data);
          if (data["response"] == 0) {
            this.loading = true;
            alert("you logged In");
            return this.router.navigateByUrl("login/DashBoard")
          } else if (data["response"] == 1) {
            this.loading = false;
            alert("worng credentials");
            return this.router.navigateByUrl("/login")
          } else {
            this.loading = false;
            alert("due to more login attempts your are blocked come after 15 min ");
            return this.router.navigateByUrl("/login")
          }
        }
      )






    /* console.log(this.loginform);
     this.submitted = true;
     if (this.registerForm.invalid) {
       alert("Please fill all required fields");
       return;
     }
     this.loading = true;
     this.login1.loginup(this.f.User_Name.value, this.f.Password.value)
       .pipe(first())
       .subscribe(
         response => {
           if (response["response"] == 0) {
             this.loading = true;
             alert("you logged In");
             return this.router.navigate["/signup"];
           } else {
             this.loading = false;
             alert("you must have entered worng credentials ");
             return this.router.navigate["/signup"];
           }
         });*/



  }
}


