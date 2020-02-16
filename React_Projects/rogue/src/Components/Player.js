import Entity from "./Entity";

class Player extends Entity {

  attr = {
    name: "Player",
    ascii: "&",
    color: "White",
    health: 10,
  }

  inventory = [];

  move(dx, dy) {
    this.x+= dx;
    this.y+= dy;
  }

  add(item) {
    this.inventory.push(item);
  }

  copyPlayer = () => {
    let newPlayer = new Player();
    Object.assign(newPlayer,this);
    return newPlayer;
  }
}

export default Player;
