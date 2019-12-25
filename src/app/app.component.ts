import { Component, OnInit } from '@angular/core';
import { ViewfinderService } from './shared/viewfinder.service';
declare const myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VasuCardiacCare';
  
  constructor(private viewfinder:ViewfinderService){
  }

  ngOnInit(){

    this.onResize();
    this.viewfinder.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        console.log('Mobile device detected')
      }
      else{
        console.log('Desktop detected')
      }
    });
       
    
  } 
  getvalue(e){
    let el = document.getElementById(e);
              el.scrollIntoView();
  }
  // onclick(){
  //   // myTest();
  // }

  onResize() {
    this.viewfinder.checkWidth();
    var width = window.innerWidth;
      if (width <= 900) {
          
          this.viewfinder.isMobile.next(true);
      } else if (width > 900 && width <= 992) {
          
        this.viewfinder.isMobile.next(false);
      } else {
          
          this.viewfinder.isMobile.next(false);
      }
    //event.target.innerWidth;
  }
}
