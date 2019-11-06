import { Component, OnInit } from '@angular/core';
declare const myTest: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  AnimatedCard = true;
  ServiceCard = false;
  constructor() { }

  ngOnInit() {
    //myTest();
    
  }

}
