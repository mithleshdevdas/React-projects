import React, { useState } from 'react'

function Bgchanger() {
  const [color, setcolor] = useState('olive')
  return (
    <>
      <div  style={{height: '100vh', background: color }}>
        <h2>bg changer app</h2>

        <button onClick={()=>setcolor('red')}>red</button>
        <button onClick={()=>setcolor('green')}>green</button>
        <button onClick={()=>setcolor('blue')}>blue</button>
        
      </div>
    </>
  )
}

export default Bgchanger