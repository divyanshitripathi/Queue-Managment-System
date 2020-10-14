import { Component, OnInit } from '@angular/core';
import { token } from './token';
import { TokenGeneratorService } from './token-generator.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-token-generator',
  templateUrl: './token-generator.component.html',
  styleUrls: ['./token-generator.component.css']
})
export class TokenGeneratorComponent implements OnInit {
  public show: boolean = false;
  public show1: boolean = false;
  token_submitobj: token;
  loading = false;
  submitted = false;
  public data;
  public tokencreated: any[];
  myform: FormGroup;


  constructor(private http: HttpClient, private tokenshow: TokenGeneratorService, private formBuilder: FormBuilder) {
    this.token_submitobj = new token;
  }

  ngOnInit(): void {
    this.myform = this.formBuilder.group({
      age: [''],
      gender: ['']
    });

  }




  showfunction1() {
    this.show = !this.show;
  }

  showfunction2() {
    this.show1 = !this.show1;
  }


  token() {
    this.submitted = true;
    console.log(this.token_submitobj)
    this.tokenshow.token_service(this.token_submitobj)
      .subscribe(data => {
        console.log(data);
        this.tokencreated = data;
      });

  }


}
