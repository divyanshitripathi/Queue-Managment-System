import { Injectable } from '@angular/core';
import { login } from '../login/login-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {

  }



  loginup(loginform: login) {
    return this.http.post<any>("https://localhost:44383/api/Login/Login", (loginform))

  }
}

/*logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('loginform');
  this.currentUserSubject.next(null);
}*/