import { Injectable } from '@angular/core';
import { ApiService } from "src/app/cube/services/api.service";

export class Can {
  enter?: boolean = false;
  leave?: boolean = false;
  pass?: boolean = false;
}
export interface IPosition {
  left: number;
  top: number;
  x?: number;
  y?: number;
}

export class Player {
  pos: IPosition = {
    left: 48,
    top: 48
  };
  moved: boolean = false;
  _steps: number = 0;

  color: string;
  name: string;

  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
    this.calculateCoordinates();
  }
  set steps(count: number) {
    this._steps = count;
  }
  get steps() {
    return this._steps;
  }
  setPosition(position: IPosition) {
    this.pos = position;
  }

  calculateCoordinates() {
    this.pos.x = this.pos.top / 48;
    this.pos.y = this.pos.left / 48;
  }
}

export class Coordinate {
  x: number;
  y: number;
  private _id: number;
  can: Can = new Can();
  type: number;

  constructor(x: number, y: number, type: map) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  set id(index: number) {
    this._id = index;
  }

  get id(): number {
    return this._id;
  }
}

export enum map {
  empty,
  p1,
  p2,
  p3,
  p4,
  f1,
  f2,
  f3,
  road,
  f4
}

@Injectable({
  providedIn: 'root'
})
export class CubeService {
  blueprint: number[][] = [
    [1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 2],
    [8, 5, 0, 0, 0, 0, 0, 0, 0, 6, 8],
    [8, 0, 5, 0, 0, 0, 0, 0, 6, 0, 8],
    [8, 0, 0, 5, 0, 0, 0, 6, 0, 0, 8],
    [8, 0, 0, 0, 5, 0, 6, 0, 0, 0, 8],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
    [8, 0, 0, 0, 9, 0, 7, 0, 0, 0, 8],
    [8, 0, 0, 9, 0, 0, 0, 7, 0, 0, 8],
    [8, 0, 9, 0, 0, 0, 0, 0, 7, 0, 8],
    [8, 9, 0, 0, 0, 0, 0, 0, 0, 7, 8],
    [4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3],
  ];
  field: {
    width: number,
    height: number,
    map: Coordinate[][]
  } = {
    width: 480,
    height: 480,
    map: []
  };
  index: number = 0;
  width: number = 480;
  height: number = 480;

  constructor(private api: ApiService) {
    this.field.width = this.width;
    this.field.height = this.height;
  }

  reset() {
    this.initMap();
    this.field = {
      width: this.width,
      height: this.height,
      map: this.field.map
    };
    this.index = 0;
  }

  init() {
    this.initMap();
    return this.field.map;
  }

  initMap() {
    this.blueprint.forEach((row, x) => {
      const line: Coordinate[] = [];
      row.forEach((type, y) => {
        line.push(this.initTile(type, x, y));
      });
      this.field.map.push(line);
    });
  }

  initTile(type: number, x: number, y: number): Coordinate {
    const tile: Coordinate = new Coordinate(x, y, type);
    tile.id = this.index++;
    tile.type = type;
    switch (type) {
      case 0: { // EMPTY
        break;
      }
      case 1: {
        // PLayer 1 start
        break;
      }
      case 2: {
        // PLayer 2 start
        break;
      }
      case 3: {
        // PLayer 3 start
        break;
      }
      case 4: {
        // PLayer 4 start
        break;
      }
      case 5: {
        // PLayer 1 finish
        break;
      }
      case 6: {
        // PLayer 2 finish
        break;
      }
      case 7: {
        // PLayer 3 finish
        break;
      }
      case 8: {
        // Regular tile
        tile.can.enter = tile.can.leave = tile.can.pass = true;
        break;
      }
      case 9: {
        // PLayer 4 finish
        break;
      }
    }
    return tile;
  }
}
