import { Component, OnInit } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';

@Component({
  selector: 'app-doctordetail',
  templateUrl: './doctordetail.component.html',
  styleUrls: ['./doctordetail.component.scss']
})
export class DoctordetailComponent implements OnInit {
  mobileview: unknown;

  constructor(private service:ViewfinderService) { }

  ngOnInit() {
    this.service.checkWidth()
    this.service.isMobile.subscribe( x =>{

      this.mobileview = x;
    });
  }

}
