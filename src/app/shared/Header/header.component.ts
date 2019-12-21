import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() valueClick = new EventEmitter()
  constructor(private route:Router) { }

  ngOnInit() {
  }

  getValue(data){
    this.valueClick.emit(data)
  }
}
