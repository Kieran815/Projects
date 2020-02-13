import React, {useRef, useEffect, useState } from 'react';
import InputManager from "./InputManager";

// functional component with `props` destructured

// BLOCK BODY = component with brackets, used for multiple element `return` statements
// CONCISE BODY = single-line return component, implicit return statement
const Rogue = ({ width, height, tileSize }) => {
  // hooks
  const canvasRef = useRef();
  const [player, setPlayer] = useState({ x: 64, y: 128 })
  let inputManager = new InputManager();
  const handleInput = (action, data) => {
    console.log(`Handle Input: ${action}:${JSON.stringify(data)}`);
    let newPlayer = {...player};
    newPlayer.x += data.x * tileSize;
    newPlayer.y += data.y * tileSize;
    setPlayer(newPlayer);
  };
  // `useEffect` is a lifecycle hook, gets called when DOM changes
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
    ctx.fillStyle="#000";
    ctx.fillRect(player.x, player.y,16,16);
  });
  return (
    <canvas
      ref={canvasRef}
      width={width * tileSize}
      height={height * tileSize}
      style={{ border: '1px solid black'}}
    >
    </canvas>
  );
}

export default Rogue;
