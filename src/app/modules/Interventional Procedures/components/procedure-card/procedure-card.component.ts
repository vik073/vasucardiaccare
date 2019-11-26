import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-procedure-card',
  templateUrl: './procedure-card.component.html',
  styleUrls: ['./procedure-card.component.scss']
})
export class ProcedureCardComponent implements OnInit {

  @Input() cardData: any;
  @Input() LoadAnimationCard: any;
  img: any;
  constructor() { }

  ngOnInit() {
    this.img = this.cardData.img;
  }

  creadtedb( obj){
    console.log(obj)
  }

}
