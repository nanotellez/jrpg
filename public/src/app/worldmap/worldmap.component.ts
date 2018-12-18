import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {
  range;
  gridSize = 100;
  viewportstart = { x: 0, y: 0 };
  viewRange = { x: this.makeRange(10), r: this.makeRange(10) };;
  constructor() { }
  ngOnInit() {
    this.range = this.makeRange(this.gridSize);
    this.setView(Math.floor(Math.random() * 10) * 10, Math.floor(Math.random() * 10) * 10)
  }

  makeRange(num) {
    return Array(num).fill(0).map((x, i) => i);
  }

  setView(x0, y0) {
    this.viewportstart = { x: x0, y: y0 };
    for (let i = 0; i < 10; i++) {
      this.viewRange.x[i] += x0;
    }
  }
}
