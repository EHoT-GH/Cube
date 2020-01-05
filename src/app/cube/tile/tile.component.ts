import { Component, Input, OnInit } from '@angular/core';
import { Coordinate } from "src/app/cube/services/cube.service";

@Component({
  selector: 'cube-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() tile: Coordinate;
  class: string = '';
  isFinish: boolean = false;
  constructor() { }

  ngOnInit() {
    if (this.tile.type === 8) {
      this.class = 'regular';
    }
  }
}
