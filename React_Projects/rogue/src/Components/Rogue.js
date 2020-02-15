import React, {useRef, useEffect, useState } from 'react';
import InputManager from "./InputManager";
import Spawn from "./Spawn";
import World from "./World";

// functional component with `props` destructured

// BLOCK BODY = component with brackets, used for multiple element `return` statements
// CONCISE BODY = single-line return component, implicit return statement
const Rogue = ({ width, height, tileSize }) => {
  // hooks
  const canvasRef = useRef();
  // commented out to put player inside world
  //const [player, setPlayer] = useState(new Player(1, 2, tileSize));
  const [world, setWorld] = useState(new World(width, height,tileSize));
  let inputManager = new InputManager();
  const handleInput = (action, data) => {
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.movePlayer(data.x, data.y);
    setWorld(newWorld);
  };
  // `useEffect` is a lifecycle hook, gets called when DOM changes
  useEffect(() => {
    let newWorld = new World();
    Object.assign(newWorld, world);
    // call to create map with walls in it
    newWorld.createCellularMap();
    // render player
    newWorld.startEmptySpace(world.player);
    // set up items to spawn
    let renSpawn = new Spawn(newWorld);
    // spawn items
    renSpawn.spawnLoot(10);
    setWorld(newWorld);
    // empty array keeps map from re-rendering with each player entity move
    // eslint-disable-next-line
  },[]);

  useEffect(() => {
    inputManager.bindKeys();
    inputManager.subscribe(handleInput);
    return () => {
      inputManager.unbindKeys();
      inputManager.unsubscribe(handleInput);
    };
  });

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0,0, width * tileSize, height * tileSize);
    world.draw(ctx);
  });
  return (
    <canvas
      ref={canvasRef}
      width={width * tileSize}
      height={height * tileSize}
      style={{ border: '1px solid black', background: 'black'
}}
    >
    </canvas>
  );
}

export default Rogue;
