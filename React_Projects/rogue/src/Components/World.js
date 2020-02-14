import { Map } from "rot-js";
import Player from "./Player";

class World {
  constructor(width, height, tileSize) {
    this.width = width;
    this.height = height;
    this.tileSize = tileSize;
    this.entities = [new Player(0, 0, 16)];
    // Double-Nested Array to create `worldMap` grid
    this.worldMap = new Array(this.width);
    for(let i = 0; i < this.width; i++) {
      this.worldMap[i] = new Array(this.height);
    }
  }

  get player() {
    return this.entities[0];
  }

  startEmptySpace(entity) {
    for(let i = entity.x; i < this.width; i++) {
      for(let j = entity.y; j < this.height; j++) {
        if(this.worldMap[i][j] === 0) {
          entity.x = i;
          entity.y = j;
          return
        }
      }
    }
  }

  isWall(x,y) {
    return (
      this.worldMap[x] === undefined ||
      this.worldMap[y === undefined] ||
      this.worldMap[x][y] === 1
    );
  }

  movePlayer(dx, dy) {
    let tempPlayer = this.player.copyPlayer();
    tempPlayer.move(dx, dy);
    if(this.isWall(tempPlayer.x, tempPlayer.y)) {
      console.log(`Wall Blocking ${tempPlayer.x}:${tempPlayer.ys}`);
    } else {
      this.player.move(dx, dy);
    }


  }

  // createRandomMap() {
  //   //Double For-Loop to run through every item in `worldMap` double-nested array
  //   for(let i = 0; i < this.width; i++) {
  //     for(let j = 0; j < this.height; j++) {
  //       // assigns random `1` or `0` to every tile
  //       this.worldMap[i][j] = Math.round(Math.random());
  //     }
  //   }
  // }

  // added rot-js for improved map functionality
  createCellularMap() {
    let map = new Map.Cellular(this.width, this.height, { connected: true });
    map.randomize(0.5);
    // puts wall border around entire grid
    let userCallback = (x, y, value) => {
      if(x === 0 || y === 0 || x === this.width - 1 || y === this.height - 1) {
        this.worldMap[x][y] = 1;
        return;
      }
      this.worldMap[x][y] = value === 0 ? 1 : 0;
    };
    map.create(userCallback);
    map.connect(userCallback, 1);
  }


  draw(context) {
    //double for-loop check every tile in grid
    for(let i = 0; i < this.width; i++) {
      for(let j = 0; j < this.height; j++) {
        // if tile was assigned a `1`, run `drawWall()`
        if (this.worldMap[i][j] === 1) {
          this.drawWall(context, i, j);
        }
      }
    }
    this.entities.forEach(entity => {
      entity.draw(context);
    });
  }

  drawWall(context, x, y) {
    context.fillStyle = "#000";
    context.fillRect(
      x * this.tileSize,
      y * this.tileSize,
      this.tileSize,
      this.tileSize);
  }
}

export default World;
