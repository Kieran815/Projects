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
    for(let x = 0; x < this.width; x++) {
      this.worldMap[x] = new Array(this.height);
    }
  }

  get player() {
    return this.entities[0];
  }

  add(entity) {
    this.entities.push(entity);
  }

  remove(entity) {
    // filter out picked-up entity from entities array
    this.entities = this.entities.filter(e => e !== entity);
  }

  startEmptySpace(entity) {
    for(let x = entity.x; x < this.width; x++) {
      for(let y = entity.y; y < this.height; y++) {
        if(this.worldMap[x][y] === 0) {
          entity.x = x;
          entity.y = y;
          return
        }
      }
    }
  }

  isWall(x,y) {
    return (
      this.worldMap[x] === undefined ||
      this.worldMap[y] === undefined ||
      this.worldMap[x][y] === 1
    );
  }

  // check tile if there is an entity object in that location
  entInLoc(x, y) {
    return this.entities.find(entity => entity.x === x && entity.y === y);
  }

  movePlayer(dx, dy) {
    let tempPlayer = this.player.copyPlayer();
    tempPlayer.move(dx, dy);
    // create object for entInLoc to check against
    let entity = this.entInLoc(tempPlayer.x, tempPlayer.y);
    // if there is an `entity`, what is it
    if(entity) {
      console.log(entity.attr.name);
      entity.action('bump', this);
      return;
    }

    if(this.isWall(tempPlayer.x, tempPlayer.y)) {
      console.log(`Wall Blocking ${tempPlayer.x}:${tempPlayer.y}`);
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
    for(let x = 0; x < this.width; x++) {
      for(let y = 0; y < this.height; y++) {
        // if tile was assigned a `1`, run `drawWall()`
        if (this.worldMap[x][y] === 1) {
          this.drawWall(context, x, y);
        }
      }
    }
    this.entities.forEach(entity => {
      entity.draw(context);
    });
  }

  drawWall(context, x, y) {
    context.fillStyle = '#013220';
    context.fillRect(
      x * this.tileSize,
      y * this.tileSize,
      this.tileSize,
      this.tileSize);
  }
}

export default World;
