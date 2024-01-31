import React, { useState } from 'react'

function BgChanger() {
  const [color,setcolor]= useState('white')
  return (
    <>
      <div style={{height:'100vh', background:color}}>
        <div style={ { border: 'solid 2px black', padding: '15px', position: 'relative', bottom: '-500px', borderRadius: '50px', width: '80vw', margin: '0 auto', display: 'flex', justifyContent:'space-around',  } }>
          <button onClick={()=>setcolor('red')}>red</button>
          <button onClick={()=>setcolor('yellow')}>yellow</button>
          <button onClick={()=>setcolor('olive')}>olive</button>
          <button onClick={()=>setcolor('green')}>green</button>
          <button onClick={()=> setcolor('orange')}>orange</button>
        </div>
    </div>
    </>
  )
}

export default BgChanger