import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'cube'
  },
  {
    path: 'cube', loadChildren: () => import(`./cube/cube.module`).then(m => m.CubeModule) // '/cube/cube.module#CubeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
