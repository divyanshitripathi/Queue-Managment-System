import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeeaddtion } from './employe-addtion';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAddtionService {

  constructor(private http: HttpClient) { }

  submit(employeeaddtionsubmit: employeeaddtion) {
    return this.http.post<any>("https://localhost:44383/api/Login/OperatorAdd2", (employeeaddtionsubmit))

  }
}
