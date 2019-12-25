import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() cardData: any;
  @Input() LoadAnimationCard: any;
  @Input() mobileview: any;
  @Output() valueClick = new EventEmitter()
  constructor(private service: ViewfinderService) { }

  ngOnInit() {
   
  }
  getclickValue(e){
    const x = Math.abs(e.deltaX) > 40 ? (e.deltaX > 0 ? 'right' : 'left'):'';
    this.valueClick.emit(x);
   console.log(x)
            
        
  }

}
