import { Component, OnInit } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';

@Component({
  selector: 'app-makeappointment',
  templateUrl: './makeappointment.component.html',
  styleUrls: ['./makeappointment.component.scss']
})
export class MakeappointmentComponent implements OnInit {


  LoadAnimationCArd = 'animation-card';
  BookingArray1 = [
    { img: true , imgsrc : "../../../../../assets/images/TMH-final-10.gif" ,title: "Online appointment", description: 'Measure your blood circulation' , option:'Book Now'},
    { img: true , imgsrc : "../../../../../assets/images/x ray_4.gif" ,title: "Emergency case", description: 'Prevent health issues with early diagnosis' , option:'Call Us'},
    { img: true , imgsrc : "../../../../../assets/images/consult.gif" ,title: "Our doctors", description: 'Prevent health issues with early diagnosis' , option:'Doctors'},
  ];
  mobileview: unknown;
  constructor(private service: ViewfinderService) { }

  ngOnInit() {
    this.service.checkWidth()
    this.service.isMobile.subscribe( x =>{

      this.mobileview = x;
    });
  }

}
