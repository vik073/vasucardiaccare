import { Component, OnInit } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';

@Component({
  selector: 'app-doctordetail',
  templateUrl: './doctordetail.component.html',
  styleUrls: ['./doctordetail.component.scss']
})
export class DoctordetailComponent implements OnInit {
  mobileview: any;
 

  constructor(private service:ViewfinderService) {
   
   }

  ngOnInit() {
    this.service.isMobile.subscribe( x =>{

      this.mobileview = x;
    });
    
  }

}
