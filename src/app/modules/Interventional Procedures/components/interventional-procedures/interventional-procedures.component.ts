import { Component, OnInit, Input } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';

@Component({
  selector: 'app-interventional-procedures',
  templateUrl: './interventional-procedures.component.html',
  styleUrls: ['./interventional-procedures.component.scss']
})
export class InterventionalProceduresComponent implements OnInit {

  LoadAnimationCArd = 'animation-card';
  LoadServiceCard = "interventual-card";
  MyArrayType = [
    {title: "PTCA (Angioplasty)", description: 'Angioplasty is a minimally invasive procedure done to treat blocks in the coronary arteries, restoring blood circulation to the heart muscles. The procedure treats pain caused by blocks and minimizes the risk of heart attacks. The procedure involves local anaesthesia and usually a 24-hour hospital admission. Most patients are able to resume work and daily activities one week after their discharge.' , option:'consult'},
    {title: "DEVICE CLOSURE", description: 'Device Closure is a treatment that involves closing a defect or opening in the membrane between the two chambers of the heart with a special device through catheterization. The procedure typically takes 1-2 hours under anaesthesia and is an outpatient surgery.' , option:'consult'},
    {title: "Pacemaker Implantation", description: 'A surgical procedure that involves the surgical insertion of a device to regularize heart rates through electrical pulses. Patients typically resume normal physical activities soon after surgery, but it is advised to avoid strenuous activity for about 6 weeks. The hospital discharge varies from same day to 48 hours post-surgery.' , option:'consult'},
    {title: "PMBV/PTMC", description: 'Percutaneous Balloon Mitral Valvuloplasty is a method to treat Mitral Stenosis. The procedure involves dilating the mitral valve through the insertion of a catheter with a balloon tip which helps widen the narrow valve. Immediate post-procedure care involves having to lie down flat for a few hours and close monitoring of the patient. Typically, an overnight hospital stay is recommended.' , option:'consult'},
   
];

animationsArray = [
  {  img: true ,imgsrc : "../../../../../assets/images/consult.gif" ,title: "OPD Consultation", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  { img: true ,imgsrc : "../../../../../assets/images/Master Cardiac care.gif" ,title: "Master Cardiac Check-up", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  {  img: true , imgsrc : "../../../../../assets/images/2D echo final.gif" ,title: "2D ECHO", description: 'Consult award-winning Cardiologists' , option:'Consult'},
]
animationsArray2 =[ 
  { img: true ,imgsrc : "../../../../../assets/images/TMH-final-10.gif" ,title: "TMT Treadmill", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  {  img: true ,imgsrc : "../../../../../assets/images/x ray_4.gif" ,title: "X-RAY", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  {  img: true ,imgsrc : "../../../../../assets/images/ECG.gif" ,title: "ECG", description: 'Prevent health issues with early diagnosis' , option:'Consult'},
 
];

mobileViewanimationsArray = [
  {  img: true ,imgsrc : "../../../../../assets/images/consult.gif" ,title: "OPD Consultation", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  { img: true ,imgsrc : "../../../../../assets/images/Master Cardiac care.gif" ,title: "Master Cardiac Check-up", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  {  img: true , imgsrc : "../../../../../assets/images/2D echo final.gif" ,title: "2D ECHO", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  { img: true ,imgsrc : "../../../../../assets/images/TMH-final-10.gif" ,title: "TMT Treadmill", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  {  img: true ,imgsrc : "../../../../../assets/images/x ray_4.gif" ,title: "X-RAY", description: 'Consult award-winning Cardiologists' , option:'Consult'},
  {  img: true ,imgsrc : "../../../../../assets/images/ECG.gif" ,title: "ECG", description: 'Prevent health issues with early diagnosis' , option:'Consult'},
 
];

@Input() AnimationCard: string;
@Input() mobileview: string;
// mobileview:any;
  constructor( private service: ViewfinderService) {
    // this.service.isMobile.subscribe( x => {

    //   this.mobileview = x;
    // });
   }

  ngOnInit() {
    // this.service.checkWidth()
    // this.service.isMobile.subscribe( x =>{

    //   this.mobileview = x;
    // });
    
  }

}
