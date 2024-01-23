import React, { useState } from 'react'

function Bgchanger() {
    const [color,setcolor]= useState('green')
    return (
      <>
        <div
          style={{
            background: color,
            width: "100vw",
                    height: "100vh",
            padding: '5px'
          }}
        >
          <div
            style={{
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "1rem",
              padding: "1rem",
                        borderRadius: "10px",
                        background: 'pink',
              width: '75vw'
            }}
          >
            <button onClick={() => setcolor("black")}>black</button>
            <button onClick={() => setcolor("orange")}>orange</button>
            <button onClick={() => setcolor("purple")}>purple</button>
            <button onClick={() => setcolor("olive")}>olive</button>
            <button onClick={() => setcolor("red")}>red</button>
            <button onClick={() => setcolor("blue")}>blue</button>
          </div>
        </div>
      </>
    );
}

export default Bgchanger

//

// 