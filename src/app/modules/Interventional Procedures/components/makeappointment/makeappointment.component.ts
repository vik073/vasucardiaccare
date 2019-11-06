import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makeappointment',
  templateUrl: './makeappointment.component.html',
  styleUrls: ['./makeappointment.component.scss']
})
export class MakeappointmentComponent implements OnInit {


  LoadAnimationCArd = true;
  BookingArray1 = [
    { imgsrc : "../../../../../assets/images/Group 4338.svg" ,title: "Online appointment", description: 'Measure your blood circulation' , option:'Book Now'},
    { imgsrc : "../../../../../assets/images/Group 4337.svg" ,title: "Emergency case", description: 'Prevent health issues with early diagnosis' , option:'Call Us'},
    { imgsrc : "../../../../../assets/images/Group 4336.svg" ,title: "Our doctors", description: 'Prevent health issues with early diagnosis' , option:'Doctors'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
