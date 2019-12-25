import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobilecard',
  templateUrl: './mobilecard.component.html',
  styleUrls: ['./mobilecard.component.scss']
})
export class MobilecardComponent implements OnInit {

  @Input() cardData: any;
  @Input() LoadAnimationCard: any;
  @Output() valueClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  getValue(data){
    
   
    let el = document.getElementById(data);
            el.scrollIntoView();
            
        
  }
  getclickValue(e){
    
    const x = Math.abs(e.deltaX) > 40 ? (e.deltaX > 0 ? 'right' : 'left'):'';
    this.valueClick.emit(x);
   console.log(x)
            
        
  }


}
