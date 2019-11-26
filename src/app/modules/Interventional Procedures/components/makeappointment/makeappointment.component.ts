import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makeappointment',
  templateUrl: './makeappointment.component.html',
  styleUrls: ['./makeappointment.component.scss']
})
export class MakeappointmentComponent implements OnInit {


  LoadAnimationCArd = 'animation-card';
  BookingArray1 = [
    { img: true , imgsrc : "../../../../../assets/images/TMH-final-10.gif" ,title: "Online appointment", description: 'Measure your blood circulation' , option:'Book Now'},
    { img: true , imgsrc : "../../../../../assets/images/Group 4337.svg" ,title: "Emergency case", description: 'Prevent health issues with early diagnosis' , option:'Call Us'},
    { img: false , imgsrc : "../../../../../assets/images/OPD consultation.mp4" ,title: "Our doctors", description: 'Prevent health issues with early diagnosis' , option:'Doctors'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
