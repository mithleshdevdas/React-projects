import React, { useState } from 'react'

function Bgchager() {
    const [color, setcolor] = useState('green')
    

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "50vh",
          background: color,
        //   textAlign: "center",
          display: "flex",
                  justifyContent: "center",
          alignItems: 'center',
       
        }}
      >
              <button className='m-2' onClick={ () => setcolor('red')
       }>red</button>
       <button className='m-2' onClick={()=>setcolor('blue')}>blue</button>
       <button className='m-2' onClick={()=>setcolor('olive')}>olive</button>
       <button className='m-2' onClick={()=>setcolor('yellow')}>yellow</button>
       <button className='m-2' onClick={()=>setcolor('orange')}>orange</button>
       <button className='m-2' onClick={()=>setcolor('purple')}>purple</button>
    
          
        
      </div>
    </>
  );
}

export default Bgchager