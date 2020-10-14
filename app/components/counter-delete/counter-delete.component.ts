import { Component, OnInit } from '@angular/core';
import { counterdeletion } from './counter-deletion';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CounterDeletionService } from './counter-deletion.service';

@Component({
  selector: 'app-counter-delete',
  templateUrl: './counter-delete.component.html',
  styleUrls: ['./counter-delete.component.css']
})
export class CounterDeleteComponent implements OnInit {
  counterdeletionobject: counterdeletion;
  loading = false;
  submitted = false;
  errors = '';
  counterdeletionForm: FormGroup;


  constructor(private http: HttpClient, private formBuilder: FormBuilder, private counterdeletion1: CounterDeletionService) {
    this.counterdeletionobject = new counterdeletion;
  }

  ngOnInit(): void {
    this.counterdeletionForm = this.formBuilder.group({
      counter_no: ['', Validators.required],
      deletion_date: ['', Validators.required],

    });
  }

  get f() { return this.counterdeletionForm.controls; }

  Delete() {
    this.submitted = true;
    if (this.counterdeletionForm.invalid) {
      alert("Please fill all required fields");
      return;
    }
    console.log(this.counterdeletionobject)
    this.counterdeletion1.submit(this.counterdeletionobject)
      .subscribe(data => {
        console.log("data saved");
      })
    alert("Empolyee Data Saved");
  }


  onReset() {
    this.counterdeletionForm.reset();
  }

}
