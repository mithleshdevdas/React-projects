import React from 'react'

function Cards({name,btn}) {
  return (
    <>
      <div style={{height: '200px', border: '1px solid', width: '350px', margin: '0 auto',textAlign: 'center'}}>
        <h2>my nme is <b>{ name}</b></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eum vitae aliquid.</p>
        <button><b>{ btn}</b></button>
</div>

    </>
  )
}

export default Cards