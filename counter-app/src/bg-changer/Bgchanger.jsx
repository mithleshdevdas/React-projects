import React, { useState } from 'react'

function Bgchanger() {
    const [color,setcolor]= useState('gray')
  return (
    <>
      <div style={{ background: color, height: "100vh" }}>
        <h1>bg-changer-app</h1>
        <div>
          <button onClick={() => setcolor("red")}>red</button>
          <button onClick={() => setcolor("yellow")}>yellow</button>
          <button onClick={() => setcolor("green")}>green</button>
          <button onClick={() => setcolor("purple")}>purple</button>
          <button onClick={() => setcolor("orange")}>orange</button>
          <button onClick={() => setcolor("pink")}>pink</button>
          <button onClick={() => setcolor("olive")}>olive</button>
        </div>
      </div>
    </>
  );
}

export default Bgchanger