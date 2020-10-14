import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeeupdation } from './employee-updation';

@Injectable({
  providedIn: 'root'
})
export class EmployeeUpdationService {

  constructor(private http: HttpClient) { }

  submit(employeeupdationsubmit: employeeupdation) {
    return this.http.post<any>("https://localhost:44383/api/Login/OperatorUpdate2", (employeeupdationsubmit))

  }
}
