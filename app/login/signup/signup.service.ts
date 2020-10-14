import { Injectable } from '@angular/core';
import { signup } from './signup.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }




  signup2(signup3: signup) {

    return this.http.post("https://localhost:44383/api/Login/SignUp", (signup3))

  }

}
