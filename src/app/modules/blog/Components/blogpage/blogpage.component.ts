import { Component, OnInit } from '@angular/core';
import { ViewfinderService } from 'src/app/shared/viewfinder.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.scss']
})
export class BlogpageComponent implements OnInit {

  showData: string;
  halfview:any = true;
  mobileview: any;
  heroes$: any;
  blog: any;
  constructor( private service: ViewfinderService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    debugger
    this.blog = this.route.snapshot.params.id;
       // this.order = params.order;
       // console.log(this.order); 
       switch(this.blog) {
        case '1':
          this.showData = 'eatwell';
          break;
        case '2':
          this.showData = 'physicalactivity';
          break;
          case '3':
            this.showData = 'healthyweight';
            break;
          case '4':
            this.showData = 'stresshandle';
            break;
        default:
          this.showData = 'mainpage';
      }
   // this.showData = "mainpage";
    this.service.checkWidth()
    this.service.isMobile.subscribe( x =>{

      this.mobileview = x;
    });
 
  }
  changecontent(data){
    let el = document.getElementById('containe');
    el.scrollIntoView();
    this.showData = data;

  }
  getvalue(event){
    if(event == 'gethealthy'){
      this.router.navigateByUrl['blog'];
    }
  }

}
