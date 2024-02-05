import React from 'react'

function Cards({name,btn}) {
  return (
    <>
      <h3>
        my name is <b>{name}</b>
      </h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        esse?
      </p>

      <button>
        <b>{btn}</b>
      </button>
    </>
  );
}

export default Cards