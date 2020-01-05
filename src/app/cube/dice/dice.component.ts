import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from "src/app/cube/services/api.service";
import { delay } from "rxjs/operators";
import { CubeMainService } from "src/app/cube/services/cube-main.service";
import { Player } from "src/app/cube/services/cube.service";

@Component({
  selector: 'cube-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  dice: number = 0;
  player: Player;
  constructor(private api: ApiService,
              private main: CubeMainService) {
  }

  ngOnInit() {
    this.main._player
      .subscribe((player) => {
        this.player = player;
      });
  }

  @HostListener('document:keypress', ['$event'])
  handleKey(event: KeyboardEvent) {

    if (event.code === 'Space') {
      this.getNumber();
    }
  }

  getNumber() {
    if (!this.main.player.steps) {
      this.dice = 0;
      this.api.getNumber()
        .pipe(delay(200))
        .subscribe((result: number[]) => {
          this.dice = result[0];
          const player = this.main.player;
          player.steps = this.dice;
          this.main.player = player;
        })
    }

  }
}
