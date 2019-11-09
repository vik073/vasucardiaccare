import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() cardData: any;
  @Input() LoadAnimationCard: any;
  constructor() { }

  ngOnInit() {
  }

}
