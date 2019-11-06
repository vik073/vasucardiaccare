import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interventional-procedures',
  templateUrl: './interventional-procedures.component.html',
  styleUrls: ['./interventional-procedures.component.scss']
})
export class InterventionalProceduresComponent implements OnInit {

  LoadAnimationCArd = true;
  LoadServiceCard = false;
  MyArrayType = [
    {title: "PTCA (Angioplasty)", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
    {title: "DEVICE CLOSURE", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
    {title: "Pacemaker Implantation", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
    {title: "PMBV/PTMC", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
   
];

animationsArray = [
  { imgsrc : "../../../../../assets/images/Group 4333.svg" ,title: "OPD Consultation", description: 'Consult award-winning Cardiologists' , option:'consult'},
  { imgsrc : "../../../../../assets/images/Group 4334.svg" ,title: "Master Cardiac Check-up", description: 'Consult award-winning Cardiologists' , option:'consult'},
  { imgsrc : "../../../../../assets/images/Group 4335.svg" ,title: "2D ECHO", description: 'Consult award-winning Cardiologists' , option:'consult'},
]
animationsArray2 = [
  { imgsrc : "../../../../../assets/images/Group 4336.svg" ,title: "TMT Treadmill", description: 'Consult award-winning Cardiologists' , option:'consult'},
  { imgsrc : "../../../../../assets/images/Group 4337.svg" ,title: "X-RAY", description: 'Consult award-winning Cardiologists' , option:'consult'},
  { imgsrc : "../../../../../assets/images/Group 4338.svg" ,title: "ECG", description: 'Consult award-winning Cardiologists' , option:'consult'},
 
];

@Input() AnimationCard: string;
  constructor() { }

  ngOnInit() {
    
  }

}
