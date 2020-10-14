import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeedelete } from './employee-deletion';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDeletionService {

  constructor(private http: HttpClient) { }

  submit(employeedeletesubmit: employeedelete) {
    return this.http.post<any>("https://localhost:44383/api/Login/OperatorDeletion2", (employeedeletesubmit))

  }
}
