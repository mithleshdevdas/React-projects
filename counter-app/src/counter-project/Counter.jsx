import React, { useState } from 'react'

function Counter() {
  const [counter, setconter] = useState(0)
  
  const add = () => {
    if (counter == counter) {
      setconter(counter +1)
    } if (counter == 20) {
      setconter(counter )
    }
  }
  
  
  const remove = () => {
    if (counter > 0) {
      setconter(counter -1)
    }
  }
  return (
    <>
      <h3>counter app <span> <b>{ counter }</b></span></h3>
      
      <button onClick={add}>add</button> {""}
      <button onClick={remove}>remove</button>
 </>
  )
}

export default Counter