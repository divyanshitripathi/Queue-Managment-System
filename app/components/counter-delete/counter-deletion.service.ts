import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { counterdeletion } from './counter-deletion';


@Injectable({
  providedIn: 'root'
})
export class CounterDeletionService {

  constructor(private http: HttpClient) { }

  submit(counterdeletionsubmit: counterdeletion) {
    return this.http.post<any>("https://localhost:44383/api/Login/counterDeletion", (counterdeletionsubmit))

  }
}
