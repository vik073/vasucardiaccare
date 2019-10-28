import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interventional-procedures',
  templateUrl: './interventional-procedures.component.html',
  styleUrls: ['./interventional-procedures.component.scss']
})
export class InterventionalProceduresComponent implements OnInit {

  MyArrayType = [
    {title: "PTCA (Angioplasty)", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
    {title: "DEVICE CLOSURE", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
    {title: "Pacemaker Implantation", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
    {title: "PMBV/PTMC", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' , option:'consult'},
   
];
  constructor() { }

  ngOnInit() {
  }

}
