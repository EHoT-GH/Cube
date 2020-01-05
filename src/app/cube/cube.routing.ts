import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeComponent } from "src/app/cube/cube.component";
import { LobbyComponent } from "src/app/cube/lobby/lobby.component";
import { FloorComponent } from "src/app/cube/floor/floor.component";


const routes: Routes = [
  {
    path: '', component: CubeComponent, children: [
      {
        path: 'lobby', component: LobbyComponent
      },
      {
        path: 'online', component: FloorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CubeRouting { }
