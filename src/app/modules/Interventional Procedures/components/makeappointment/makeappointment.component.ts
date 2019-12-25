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
    { img: true , imgsrc : "../../../../../assets/images/Group 4512.svg" ,title: "Online appointment", description: 'Schedule a Consultation' , option:'Book Now'},
    { img: true , imgsrc : "../../../../../assets/images/Group 4508.svg" ,title: "Emergency case", description: 'Ring our medical helpline' , option:'Call Us'},
    { img: true , imgsrc : "../../../../../assets/images/Group 4515.svg" ,title: "Our doctors", description: 'Know Your Doctors' , option:'Doctors'},
  ];
  intdotarray =[
    '.','.','.'
  ]
  mobileview: unknown;
  index: any = 0;
  constructor(private service: ViewfinderService) { }

  ngOnInit() {
    this.service.checkWidth()
    this.service.isMobile.subscribe( x =>{

      this.mobileview = x;
    });
  }

  setService(j){
    this.index = j;
  }

 getNext(e , t, d){
   if(e=='left' && this.index<this.BookingArray1.length-1){

     this.index = this.index+1;
   }
   else if (e=='right' && this.index>0) {
     this.index = this.index-1;
     
   } else {
     this.index = t;
     
   }
 }

}
