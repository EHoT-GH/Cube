import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CubeRouting } from 'src/app/cube/cube.routing';
import { FloorComponent } from "src/app/cube/floor/floor.component";
import { TileComponent } from "src/app/cube/tile/tile.component";
import { RowComponent } from "src/app/cube/row/row.component";
import { CubeComponent } from 'src/app/cube/cube.component';
import { CubeService } from "src/app/cube/services/cube.service";
import { LobbyComponent } from './lobby/lobby.component';
import { CubeMainService } from "src/app/cube/services/cube-main.service";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "src/app/cube/services/api.service";
import { DiceComponent } from "src/app/cube/dice/dice.component";
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [
    FloorComponent,
    TileComponent,
    RowComponent,
    CubeComponent,
    LobbyComponent,
    DiceComponent,
    PlayerComponent
  ],
  providers: [
    CubeService,
    CubeMainService,
    ApiService
  ],
  imports: [
    CommonModule,
    CubeRouting,
    HttpClientModule
  ]
})
export class CubeModule { }
