import { Component, Input, OnInit } from '@angular/core';
import { Coordinate, CubeService, Player } from "src/app/cube/services/cube.service";

@Component({
  selector: 'cube-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {
  @Input() coords: Coordinate[][] = [];
  players: Player[] = [
    new Player('blue', 'First'),
    new Player('red', 'Second'),
    new Player('green', 'Last')
  ];
  constructor(private game: CubeService) { }

  ngOnInit() {
    this.players[0].setPosition({top: 480, left: 480});
    this.players[1].setPosition({top: 0, left: 0});
    this.players[2].setPosition({top: 0, left: 480});
    this.coords = this.game.init();
  }

}
