import { Component, OnInit } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.scss']
})
export class BlogpageComponent implements OnInit {

  showData: string;
  halfview:any = true;
  mobileview;
  constructor( private service: ViewfinderService , private router: Router) { }

  ngOnInit() {
    this.showData = "mainpage";
    this.service.checkWidth()
    this.service.isMobile.subscribe( x =>{

      this.mobileview = x;
    });
  }

  changecontent(data){
    debugger
    let el = document.getElementById('containe');
    el.scrollIntoView();
    this.showData = data;

  }
  getvalue(event){
    if(event == 'gethealthy'){
      this.router.navigateByUrl['blog'];
    }
  }

}
