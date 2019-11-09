import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthy-blog',
  templateUrl: './healthy-blog.component.html',
  styleUrls: ['./healthy-blog.component.scss']
})
export class HealthyBlogComponent implements OnInit {

  LoadAnimationCArd = true;
  BlogArray1 = [
    { imgsrc : "../../../../../assets/images/food.jpg" ,title: 'Get healthy\\', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam' , titledetail:'Eat well'},
    { imgsrc : "../../../../../assets/images/moving-1.jpg" ,title: 'Get healthy\\', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam' , titledetail:'Get moving'},
 ];
  BlogArray2 = [
    { imgsrc : "../../../../../assets/images/food.jpg" ,title: 'Get healthy\\', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam' , titledetail:'Maintain a healthy weight'},
    { imgsrc : "../../../../../assets/images/moving-1.jpg" ,title: 'Get healthy\\', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam' , titledetail:'Manage your stress'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
