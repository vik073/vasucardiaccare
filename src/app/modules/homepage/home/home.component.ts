import { Component, OnInit } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor( private service: ViewfinderService , private route: ActivatedRoute) { }

ngOnInit(){
  
  
  this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        if(params['view']!=null){ 
        let el = document.getElementById(params['view']);
            el.scrollIntoView();
            
        }
        else{
          
          let el = document.getElementById(params['canvas-container']);
            el.scrollIntoView();
        }
      });
  this.service.checkWidth()
    this.service.isMobile.subscribe( x =>{

      this.mobileview = x;
    });
    
}
getvalue(e){
  let el = document.getElementById(e);
            el.scrollIntoView();
}

     hello(e){
        debugger
        
            let el = document.getElementById('hell');
            el.scrollIntoView();
          
    }
  }
  
  
