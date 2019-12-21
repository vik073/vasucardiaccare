import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {

  @Input() timeArray: any;
  @Output() valueClick = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  getValue(data){
    this.valueClick.emit(data)
  }

}
