import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.scss']
})
export class BookappointmentComponent implements OnInit {

  public selectedMoment = new Date();
  
 

  

  timeArray = [
    "8:00","9:00" , "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00",
    "16:00", "17:00", "18:00", "19:00", "20:00","21:00"
     ];
  selectedIndex: number;
  profileForm: FormGroup;
  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      fullName: ['' , Validators.required],
      mobileNumber: ['' , Validators.required],
      age: ['' , Validators.required],
    });
  }

  onSubmit(){
    debugger
  }

  getvalue(e){
  }

  public setRow(_index: number) {
    this.selectedIndex = _index;
  }

}
