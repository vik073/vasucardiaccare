import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() valueClick = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  getValue(data){
    this.valueClick.emit(data)
    debugger
  }
}
