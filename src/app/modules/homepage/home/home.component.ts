import { Component, OnInit } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';
 

declare const myTest: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  AnimatedCard = true;
  ServiceCard = false;
  mobileview: unknown;
  constructor( private service: ViewfinderService) { }

ngOnInit(){
  this.service.checkWidth()
    this.service.isMobile.subscribe( x =>{

      this.mobileview = x;
    });
    
}

     hello(e){
        debugger
        
            let el = document.getElementById('hell');
            el.scrollIntoView();
          
    }
  }
  
  
