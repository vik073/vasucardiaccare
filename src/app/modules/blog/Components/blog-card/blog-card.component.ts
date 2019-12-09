import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private service: ViewfinderService) { }

  ngOnInit() {
   
  }

}
