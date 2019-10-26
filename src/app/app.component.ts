import { Component } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VasuCardiacCare';
  
  onclick(){
    debugger
    myTest();
  }
}
