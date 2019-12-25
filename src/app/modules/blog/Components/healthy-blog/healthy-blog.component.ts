import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-healthy-blog',
  templateUrl: './healthy-blog.component.html',
  styleUrls: ['./healthy-blog.component.scss']
})
export class HealthyBlogComponent implements OnInit {

  @Input() mobileview
  LoadAnimationCArd = true;
  BlogArray1 = [
    { imgsrc : "../../../../../assets/Eat-Well.jpg" ,title: 'Get healthy\\', description: 'Learn how heart-healthy choices can help lower your risk of heart disease and stroke whether eating at home or dining out.' , titledetail:'Eat well'},
    { imgsrc : "../../../../../assets/get-moving.jpg" ,title: 'Get healthy\\', description: 'Learn the benefits of healthy activity, and get tips on adding more exercise into your daily routine.' , titledetail:'Get moving'},
 ];
  BlogArray2 = [
    { imgsrc : "../../../../../assets/body-weight.jpg" ,title: 'Get healthy\\', description: 'Learn the basic principles of a healthy weight and waistline — and why it matters.' , titledetail:'Maintain a healthy weight'},
    { imgsrc : "../../../../../assets/stress.jpg" ,title: 'Get healthy\\', description: 'Learn to identify the things that are causing you stress so you can deal with them effectively.' , titledetail:'Manage your stress'},
  ];

  BlogArray = [

  { imgsrc : "../../../../../assets/Eat-Well.jpg" ,title: 'Get healthy\\', description: 'Learn how heart-healthy choices can help lower your risk of heart disease and stroke whether eating at home or dining out.' , titledetail:'Eat well'},
    { imgsrc : "../../../../../assets/get-moving.jpg" ,title: 'Get healthy\\', description: 'Learn the benefits of healthy activity, and get tips on adding more exercise into your daily routine.' , titledetail:'Get moving'},
    { imgsrc : "../../../../../assets/images/Maintain weight.jpg" ,title: 'Get healthy\\', description: 'Learn the basic principles of a healthy weight and waistline — and why it matters.' , titledetail:'Maintain a healthy weight'},
    { imgsrc : "../../../../../assets/images/Manage stress.jpg" ,title: 'Get healthy\\', description: 'Learn to identify the things that are causing you stress so you can deal with them effectively.' , titledetail:'Manage your stress'},
  ];
  index: any = 0;
  dotarray =[
    '.','.','.','.'
  ]
  constructor() { }

  ngOnInit() {
  }
  setService(j){
    this.index = j;
  }

 getNext(e , d){
   debugger
   if(e=='left' && this.index<this.BlogArray.length){

     this.index = this.index+1;
   }
   else if (e=='right' && this.index<this.BlogArray.length) {
     this.index = this.index-1;
     
   } else {
     this.index = this.index;
     
   }
 }

}
