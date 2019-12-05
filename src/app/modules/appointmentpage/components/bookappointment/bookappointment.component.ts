import { Component, OnInit , OnChanges} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.scss']
})
export class BookappointmentComponent implements OnInit  {

  public selectedMoment = new Date();
  
 

  

  timeArray = [
    "8:00","9:00" , "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00",
    "16:00", "17:00", "18:00", "19:00", "20:00","21:00"
     ];
     timeArray1= [
      "8:00","9:00" , "10:00", "11:00", "12:00","13:00"
       ];
     serviceArray = [
       "OPD Consultation" , "Dental Care", "Master Cardiac Check-up", "Lab Test", "Home Care Services", "Other Services"

     ]
  selectedIndex: number;
  selectedIndexj: number;
  dateTimeRange: any;
  public year = new Date().getFullYear();
  public day = new Date().getDay();
  public month = new Date().getMonth();
  public hour = new Date().getHours();
  public minutes = new Date().getMinutes();
  public invalidDateTime1 = new Date(2018, 5, 26, 20, 30);
  public min = new Date(this.year , this.month, this.day+1, this.hour, this.minutes);

  // Max moment: April 25 2018, 20:30
  // public max = new Date(2019, 12, 28, 20, 30);
      public t = formatDate(new Date(), 'yyyy,MM,dd,hh,mm', 'en');
    
  profileForm: FormGroup;
  constructor( private fb: FormBuilder ) { 

  }

  ngOnInit() {
    var t = formatDate(new Date(), 'yyyy,MM,dd,hh,mm', 'en');
    
    console.log(this.min);
    this.profileForm = this.fb.group({
      fullName: ['' , Validators.required],
      mobileNumber: ['' , Validators.required],
      age: ['' , Validators.required],
    });
  }
  // ngOnChanges(){
  //   this.timeArray = [
      
  //      ];
  // }

  onSubmit(){

    debugger
    var t = this.dateTimeRange;
  }

  getvalue(e){
  }

  public setRow(_index: number) {
    this.selectedIndex = _index;
  }

  public setService(_index: number) {
    debugger
    this.selectedIndexj = _index;
  }

}
