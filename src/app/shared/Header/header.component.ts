import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ViewfinderService } from '../viewfinder.service';
import { faAlignJustify , faTimes} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faCoffee = faAlignJustify;
  faclose = faTimes;
  options= [
    "Appointment" , "Services", "GetHealthy", "About", "FAQ", "ContactUs" 
  
  ]
  show:boolean = false;
  @Output() valueClick = new EventEmitter()
  
  selectedindex: any;
  selectedIndexj: any;
  mobileview: any;
  constructor(private route:Router , private service: ViewfinderService) { }

  ngOnInit() {
    this.service.isMobile.subscribe( x =>{
      this.mobileview = x;
    });

  }
  shownav(){
    document.getElementById("nav").style.display = 'flex';
    document.getElementById("nav").style.textAlign = 'center';
    document.getElementById("header-c").style.height = "100vh";
    this.show = true;
    
  }
  async setService(j , service){
    this.selectedIndexj = j;
    await delay(300);
    this.route.navigateByUrl['/'+service]
    
    this.closenav();
  }
  async closenav(){
    await delay(300);
    this.show = false;
    document.getElementById("nav").style.display = 'none';
    document.getElementById("header-c").style.height = "60px";
  }

  getValue(data){
    
   
    let el = document.getElementById(data);
            el.scrollIntoView();
            
        
  }
  
}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
