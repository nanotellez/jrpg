import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {
  range;
  gridSize = 100
  constructor() { }
  ngOnInit() {
    this.makeRange(this.gridSize);
  }
  
  makeRange(num){
    this.range = Array(num).fill(0).map((x,i)=>i);
  }

}
