import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  profileForm: any;

  
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      fullName: ['' , Validators.required],
      mobileNumber: ['' , Validators.required],
      age: ['' , Validators.required],
    });
  }

  onSubmit(){
    
  }

}
