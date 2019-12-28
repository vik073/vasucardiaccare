import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healthy-blog',
  templateUrl: './healthy-blog.component.html',
  styleUrls: ['./healthy-blog.component.scss']
})
export class HealthyBlogComponent implements OnInit {

  @Input() mobileview
  LoadAnimationCArd = true;
  BlogArray1 = [
    { index: '1',  imgsrc : "../../../../../assets/Eat-Well.jpg" ,title: 'Get healthy\\', description: 'Learn how heart-healthy choices can help lower your risk of heart disease and stroke whether eating at home or dining out.' , titledetail:'Eat well'},
    { index: '2', imgsrc : "../../../../../assets/get-moving.jpg" ,title: 'Get healthy\\', description: 'Learn the benefits of healthy activity, and get tips on adding more exercise into your daily routine.' , titledetail:'Get moving'},
 ];
  BlogArray2 = [
    { index: '3', imgsrc : "../../../../../assets/body-weight.jpg" ,title: 'Get healthy\\', description: 'Learn the basic principles of a healthy weight and waistline — and why it matters.' , titledetail:'Maintain a healthy weight'},
    { index: '4', imgsrc : "../../../../../assets/stress.jpg" ,title: 'Get healthy\\', description: 'Learn to identify the things that are causing you stress so you can deal with them effectively.' , titledetail:'Manage your stress'},
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
  constructor(private router: Router) { }

  ngOnInit() {
  }
  setService(j){
    this.index = j;
  }

 getNext(e , t, d){
   if(e=='left' && this.index<this.BlogArray.length-1){

     this.index = this.index+1;
   }
   else if (e=='right' && this.index>0) {
     this.index = this.index-1;
     
   } else {
     this.index = t;
     
   }
 }

 goProducts() {
  this.router.navigate(['/GetHealthy'], { queryParams: { order: 'popular' } });
}


}
