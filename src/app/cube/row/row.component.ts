import { Component, Input, OnInit } from '@angular/core';
import { Coordinate } from "src/app/cube/services/cube.service";

@Component({
  selector: 'cube-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() row: Coordinate[] = [];
  constructor() { }

  ngOnInit() {
  }

}
