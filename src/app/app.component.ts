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

    debugger
    this.onResize();
    this.viewfinder.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        debugger
        console.log('Mobile device detected')
      }
      else{
        console.log('Desktop detected')
      }
    });
        
  } 

  // onclick(){
  //   // myTest();
  // }

  onResize() {
    console.log('hello')
    debugger
    this.viewfinder.checkWidth();
    var width = window.innerWidth;
      if (width <= 468) {
          
          this.viewfinder.isMobile.next(true);
      } else if (width > 468 && width <= 992) {
          
        this.viewfinder.isMobile.next(false);
      } else {
          
          this.viewfinder.isMobile.next(false);
      }
    //event.target.innerWidth;
  }
}
