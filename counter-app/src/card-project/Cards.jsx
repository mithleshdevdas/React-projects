import React from 'react'

function Cards({name,btn}) {
  return (
    <>
      <h1>
        my name is <b>{name}</b>
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, dolor?
      </p>
      <button>
        <b>{btn}</b>
      </button>
    </>
  );
}

export default Cards