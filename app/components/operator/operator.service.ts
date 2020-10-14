import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { operator } from './operator-model';


@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) { }

  submit(operatorsubmit: operator) {
    return this.http.post<any>("https://localhost:44383/api/Login/OperatorAdd", (operatorsubmit));
    console.log("data received");

  }


}
