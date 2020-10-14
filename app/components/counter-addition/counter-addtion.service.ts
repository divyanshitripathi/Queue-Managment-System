import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { counteraddtion } from './counter_Addtion';

@Injectable({
  providedIn: 'root'
})
export class CounterAddtionService {

  constructor(private http: HttpClient) { }

  submit(counteraddtionsubmit: counteraddtion) {
    return this.http.post<any>("https://localhost:44383/api/Login/counterAddtion", (counteraddtionsubmit))

  }
}
