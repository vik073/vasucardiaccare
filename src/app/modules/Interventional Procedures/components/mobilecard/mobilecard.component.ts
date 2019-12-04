import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobilecard',
  templateUrl: './mobilecard.component.html',
  styleUrls: ['./mobilecard.component.scss']
})
export class MobilecardComponent implements OnInit {

  @Input() cardData: any;
  @Input() LoadAnimationCard: any;
  constructor() { }

  ngOnInit() {
  }

}
