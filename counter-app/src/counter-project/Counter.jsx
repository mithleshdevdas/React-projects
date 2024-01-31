import React, { useState } from 'react'

function Counter() {
    const [counter, setcounter] = useState(0)
    
    const add = () => {
        if (counter == counter) {
            
            setcounter(counter +1) 
        } if (counter === 20) {
            setcounter(counter)
        }
    }
    const remove = () => {
        if (counter > 0) {
            setcounter(counter -1)
        }
    }
  return (
    <>
      <h1>
        counter app{" "}
        <span >
          <b>{counter}</b>
        </span>
          </h1>
          <div className="btn"style={{display: 'flex', justifyContent: 'space-around'}}>
              
      <button onClick={add}>
        <b>add</b>
          </button>
          <button onClick={remove}><b>remove</b></button>
          </div>
    </>
  );
}

export default Counter