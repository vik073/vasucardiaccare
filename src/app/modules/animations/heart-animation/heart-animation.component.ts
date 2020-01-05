import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-heart-animation',
  templateUrl: './heart-animation.component.html',
  styleUrls: ['./heart-animation.component.scss']
})
export class HeartAnimationComponent implements OnInit {

  data : any;
  @Input() mobileview:any;
  @Input() heartSize:any;
  constructor() { }

  ngOnInit() {
    
  }
  


}
