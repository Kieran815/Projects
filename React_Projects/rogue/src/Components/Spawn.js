import Loot from "./Loot";
import Monster from "./Monster";

// construct lootTable of items that will be placed
const lootTable = [
  {name: "Long Sword", color: "white", ascii: "/", offset: {x: 6, y: 3}},
  {name: "Health", color: "red", ascii: "i", offset: {x: 6, y: 3}},
  {name: "Gold", color: "yellow", ascii: "$", offset: {x: 3, y: 3}},
  {name: "Armor", color: "white", ascii: "@", offset: {x: 4, y: 3}},
]

const enemyTable = [
  {name: "Goblin", color: "green", ascii: "**"},


];

class Spawn {

  constructor(world) {
    this.world = world;
  }

  initSpawn(spawnCount, createEntity) {
    for (let count = 0; count < spawnCount; count++) {
      let entity = createEntity();
      this.world.add(entity);
      this.world.startEmptySpace(entity);
    }
  }

  spawnLoot(spawnCount) {
    this.initSpawn(spawnCount, () => {
      return new Loot(
        randoInt(this.world.width),
        randoInt(this.world.height),
        this.world.tileSize,
        lootTable[randoInt(lootTable.length)]
      );
    });
  }

  spawnEnemy(spawnCount) {
    this.initSpawn(spawnCount, () => {
      return new Monster(
        randoInt(this.world.width),
        randoInt(this.world.height),
        this.world.tileSize,
        enemyTable[randoInt(enemyTable.length)]
      );
    });
  }
}

function randoInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Spawn;
