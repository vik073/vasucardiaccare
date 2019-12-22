import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  options= [
    "Appointment" , "Services", "GetHealthy", "About", "FAQ", "ContactUs" 
  
  ]
  @Input() mobileview: any;
  selectedIndexj: any;
  constructor() { }

  ngOnInit() {
  }

   setService(j , service){
    this.selectedIndexj = j;
    // await delay(300);
  }

}
