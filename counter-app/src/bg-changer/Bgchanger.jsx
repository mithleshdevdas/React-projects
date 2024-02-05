import React, { useState } from 'react'

function Bgchanger() {
    const [color,setcolor]=useState('olive')
  return (
      <>
          <div style={{width: '100vw',height: '100vh', background: color}}>
              <div style={{border: '2px solid black', width:'75vw', display: 'flex', justifyContent : 'space-around'}}>
                  <button onClick={()=>setcolor('red')}>red</button>
                  <button onClick={()=>setcolor('blue')}>blue</button>
                  <button onClick={()=> setcolor('green')}>green</button>
                  <button onClick={()=>setcolor('orange')}>orange</button>
                  <button onClick={()=>setcolor('purple')}>purple</button>
                  
              </div>
          </div>
   </>
  )
}

export default Bgchanger