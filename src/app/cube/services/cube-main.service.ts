import { Injectable } from '@angular/core';
import { Player } from "src/app/cube/services/cube.service";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CubeMainService {
  public _player: BehaviorSubject<Player> = new BehaviorSubject<Player>(null);
  constructor() {}
  set player(player: Player) {
    this._player.next(player);
  }
  get player(): Player {
    return this._player.getValue();
  }
}
