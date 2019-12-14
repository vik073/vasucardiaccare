import { Component, OnInit } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.scss']
})
export class BlogpageComponent implements OnInit {

  showData: string;
  halfview:any = true;
  mobileview;
  constructor( private service: ViewfinderService) { }

  ngOnInit() {
    this.showData = "mainpage";
    this.service.checkWidth()
    this.service.isMobile.subscribe( x =>{

      this.mobileview = x;
    });
  }

  changecontent(data){
    debugger
    this.showData = data;

  }

}
