import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CubeService, Player } from "src/app/cube/services/cube.service";

@Component({
  selector: 'cube-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  constructor(private cube: CubeService) { }

  ngOnInit() {
  }
  @HostListener('document:keypress', ['$event'])
  move(e) {
    const c = e.key;
    if (!this.player.steps) {
      return;
    }
    if (c == 'w') {
      if (this.player.pos.top != 0) {
        this.player.pos.top -= 48;
        this.player.moved = true;
      }
    } else if (c == 'a') {
      if (this.player.pos.left != 0) {
        this.player.pos.left -= 48;
        this.player.moved = true;
      }
    } else if (c == 's') {
      if (this.player.pos.top < this.cube.field.height) {
        this.player.pos.top += 48;
        this.player.moved = true;
      }
    } else if (c == 'd') {
      if (this.player.pos.left < this.cube.field.width) {
        this.player.pos.left += 48;
        this.player.moved = true;
      }
    }
    this.player.calculateCoordinates();
    this.player.calculatePosition();
    this.calculateStep(this.player);
    this.player.steps--;
  }

  canGo() {
    const {x, y} = this.player.pos;
    return this.cube.field.map[x][y].can.enter;
  }

  calculateStep(player: Player) {
    const {x, y} = player.pos;
    console.log(this.cube.field.map[x][y], this.canGo());
  }
}
