import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { token } from './token';

@Injectable({
  providedIn: 'root'
})
export class TokenGeneratorService {


  constructor(private http: HttpClient) { }

  token_service(tokensubmit: token) {
    return this.http.post<any>("https://localhost:44383/api/Login/TokenGenrator", (tokensubmit))

  }



}
