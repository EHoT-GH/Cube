import { Component, Input, OnInit } from '@angular/core';
import { Coordinate } from "src/app/cube/services/cube.service";

@Component({
  selector: 'cube-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() tile: Coordinate;
  constructor() { }

  ngOnInit() {
  }
  log() {
    console.log(this.tile.x, this.tile.y);
  }
}
