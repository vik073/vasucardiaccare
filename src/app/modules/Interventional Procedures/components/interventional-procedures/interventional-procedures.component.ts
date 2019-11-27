import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interventional-procedures',
  templateUrl: './interventional-procedures.component.html',
  styleUrls: ['./interventional-procedures.component.scss']
})
export class InterventionalProceduresComponent implements OnInit {

  LoadAnimationCArd = 'animation-card';
  LoadServiceCard = "interventual-card";
  MyArrayType = [
    {title: "PTCA (Angioplasty)", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
    {title: "DEVICE CLOSURE", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
    {title: "Pacemaker Implantation", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
    {title: "PMBV/PTMC", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
   
];

animationsArray = [
  {  img: true ,imgsrc : "../../../../../assets/images/consult.gif" ,title: "OPD Consultation", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  { img: true ,imgsrc : "../../../../../assets/images/Master Cardiac care.gif" ,title: "Master Cardiac Check-up", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  {  img: true , imgsrc : "../../../../../assets/images/2D echo final.gif" ,title: "2D ECHO", description: 'Consult award-winning Cardiologists' , option:'Consult'},
]
animationsArray2 = [
  { img: true ,imgsrc : "../../../../../assets/images/TMH-final-10.gif" ,title: "TMT Treadmill", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  {  img: true ,imgsrc : "../../../../../assets/images/x ray_4.gif" ,title: "X-RAY", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  {  img: true ,imgsrc : "../../../../../assets/images/ECG.gif" ,title: "ECG", description: 'Prevent health issues with early diagnosis' , option:'Consult'},
 
];

@Input() AnimationCard: string;
  constructor() { }

  ngOnInit() {
    
  }

}
