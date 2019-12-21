import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedure-card',
  templateUrl: './procedure-card.component.html',
  styleUrls: ['./procedure-card.component.scss']
})
export class ProcedureCardComponent implements OnInit {

  @Input() cardData: any;
  @Input() LoadAnimationCard: any;
  img: any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.img = this.cardData.img;
  }

  

}
