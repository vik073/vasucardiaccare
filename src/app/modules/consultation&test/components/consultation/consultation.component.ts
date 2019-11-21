import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';
import * as gsap  from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin";
PixiPlugin.registerPIXI(PIXI);

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent {


  constructor() { }


}

