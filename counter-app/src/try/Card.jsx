import React from 'react'

function Card({name,btn}) {
  return (
    <>
      <h1>
        my name is <b>{name} </b>
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        provident assumenda consequuntur?
      </p>
      <button>
        <b>{btn}</b>
          </button>
        
    </>
  );
}

export default Card