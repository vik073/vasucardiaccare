import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewfinderService {

  public isMobile = new Subject();
  public screenWidth: string;


  constructor() {
      this.checkWidth();
  }

  onMobileChange(status: boolean) {
      this.isMobile.next(status);
  }

  getMobileStatus(): Observable<any> {
      return this.isMobile.asObservable();
  }

  public checkWidth() {
      var width = window.innerWidth;
      if (width <= 700) {
          this.screenWidth = 'sm';
          this.isMobile.next(true);
      } else if (width > 700 && width <= 992) {
          this.screenWidth = 'md';
          this.isMobile.next(false);
      } else {
          this.screenWidth = 'lg';
          this.isMobile.next(false);
      }
  }
}
