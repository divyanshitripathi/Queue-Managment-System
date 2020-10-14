import { Injectable } from '@angular/core';
import { operatorupdate } from './operator-update';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OperatorupdateService {

  constructor(private http: HttpClient) { }



  Update_operator(operator_update: operatorupdate) {
    return this.http.post<any>("https://localhost:44383/api/Login/OperatorUpdate", (operator_update))

  }

  filters() {
    return this.http.get<any>("https://localhost:44383/api/Login/Search")
  }
}
