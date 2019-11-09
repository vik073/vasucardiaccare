import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  LoadAnimationCArd = 'service-card';
  BookingArray1 = [
    { imgsrc : "../../../../../assets/images/Group 4332.svg" ,title: "RELIABILITY", description: 'A team of seasoned doctors and medical professionals who are experts in their fields of specialization' },
    { imgsrc : "../../../../../assets/images/Group 3672 (1).svg" ,title: "QUALITY", description: 'Cutting-edge lab facilities and top-notch pharmaceuticals to ensure precision, efficiency and accuracy' },
    { imgsrc : "../../../../../assets/images/Group 3644 (1).svg" ,title: "TRANSPARENCY", description: 'Complete transparency of all costs and services' },
    { imgsrc : "../../../../../assets/images/Group 3664.svg" ,title: "AMBIENCE", description: 'An environment specially designed to inspirit a premium & pleasant experience'},

  ];
  constructor() { }

  ngOnInit() {
  }

}
