import { Component, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { formatDate } from '@angular/common';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';
import { Router } from '@angular/router';
import { EmailService } from '../../Services/email.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.scss']
})
export class BookappointmentComponent implements OnInit  {

  public selectedMoment = new Date();
  
 hide:boolean;
  timeArray = [
    "8:00","9:00" , "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00",
    "16:00", "17:00", "18:00", "19:00", "20:00","21:00"
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
  
  public min = new Date(this.year , this.month, this.day+1, this.hour, this.minutes);

  // Max moment: April 25 2018, 20:30
  // public max = new Date(2019, 12, 28, 20, 30);
  public t = formatDate(new Date(), 'yyyy,MM,dd,hh,mm', 'en');
  servicename: string = '';
  bookingtime: string = '';
  valid: boolean = false;
  mintime: number;
    
      profileForm() {
        return new FormGroup({
          fullName: new FormControl('', [Validators.required]),
          mobileNumber: new FormControl('', [Validators.required , phonenumbervalidator, Validators.maxLength(10), Validators.pattern('[1-9]{1}[0-9]{9}') ]),
          age: new FormControl('', [Validators.required , Validators.maxLength(3), phonenumbervalidator, Validators.pattern('^[0-9]*$') ])
        });
      }
  contactForm: FormGroup;
  mobileview: any;
  constructor( public dialog:MatDialog, private fb: FormBuilder, private service: ViewfinderService , private route: Router , private emailservice:EmailService ) { 
   this.mobileview = false;
   

    this.contactForm = this.profileForm();

  }
  get f() 
  { return this.contactForm.controls; }ß
  

  ngOnInit() {
    //this.service.checkWidth()
    this.service.isMobile.subscribe( x =>{
      this.mobileview = x;
    });

    var t = formatDate(new Date(), 'yyyy,MM,dd,hh,mm', 'en');
    console.log(this.t , "hhh")
    this.min = new Date();
    this.mintime = this.min.getHours();
    console.log(this.mintime - 1, 'min ganta')
    this.min.setDate(this.min.getDate()- 1);
    console.log(this.min);
    
  }

  getdateValue(e){

    console.log(e.getDay())
    if(e.getDay() <= this.min.getDay() && e.getHours() > 9){

      this.mintime = e.getHours();
    }
    

  }

  revert() {
    this.contactForm.reset();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  
  lessThan(e){
    debugger
    if(e >this.mintime){
      return true;
    }
    else{
      return false;
    }

  }

  onSubmit(){
    if( this.dateTimeRange != undefined && this.servicename!= '' && this.bookingtime != ''){
      this.valid = false;
      var day = this.dateTimeRange.toDateString();
      this.emailservice.sendappointmentEmail(this.f.fullName.value , this.f.age.value, this.f.mobileNumber.value, this.servicename, day , this.bookingtime).subscribe(res=>{
        
      if(res){
        this.openDialog();
        this.revert();
      }
      });
    }
    else{
      this.valid = true;

    }
  }

  getvalue(e){
    
    this.bookingtime = e;
  }

  public setRow(_index: number) {
    this.selectedIndex = _index;
  }

  public setService(_index: number) {
    this.selectedIndexj = _index;
    switch (_index) {
      case 0:
        this.servicename = 'OPD Consultation';
          break;
      case 1:
        this.servicename = 'Dental Care';
          break;
      case 2:
        this.servicename = 'Master Cardiac Check-up';
          break;
      case 3:
        this.servicename = 'Lab Test';
          break;
      case 4:
        this.servicename = 'Home Care Services';
          break;
      case 5:
        this.servicename = 'Other Services';
          break;
      default:
        this.servicename = ' ';
          break;
  }
  }

}

export function phonenumbervalidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^\d+$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}
