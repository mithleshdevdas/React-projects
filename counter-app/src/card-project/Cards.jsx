import React from 'react'

function Cards({name,btn}) {
  return (
    <>
      <h2>my name is <b>{ name }</b></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, distinctio?</p>
      <button><b>{ btn}</b></button>
</>
  )
}

export default Cards