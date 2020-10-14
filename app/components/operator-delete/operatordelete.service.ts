import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { operator_delete } from './operator-delete';

@Injectable({
  providedIn: 'root'
})
export class OperatordeleteService {

  constructor(private http: HttpClient) { }


  submit(operatordelete2: operator_delete) {
    return this.http.post<any>("https://localhost:44383/api/Login/OperatorDelete", (operatordelete2))

  }
}
