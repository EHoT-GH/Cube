import { Component, Input, OnInit } from '@angular/core';
import { Coordinate, CubeService, Player } from "src/app/cube/services/cube.service";
import { CubeMainService } from "src/app/cube/services/cube-main.service";

@Component({
  selector: 'cube-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {
  @Input() coords: Coordinate[][] = [];
  players: Player[] = [
    new Player('blue', 'First')
  ];
  constructor(private game: CubeService,
              private main: CubeMainService) { }

  ngOnInit() {
    this.players[0].setPosition({top: 480, left: 480});
    this.main.player = this.players[0];
    this.coords = this.game.init();
  }

}
