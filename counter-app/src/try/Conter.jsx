import React, { useState } from 'react'

function Conter() {
    const [conter, setconter] = useState(0)
    
    const Add = () => {
        if (conter== conter) {
            setconter(conter + 1
            )
        }
       if (conter ==20) {
            setconter(conter )
        }
    }
    const Remove = () => {
        if (conter > 0) {
            
            setconter(conter -1)
        }
    }

  return (
      <>
          <div className='text-center'>
              

              <h1>counter <span>{conter}</span></h1>
          <button className='m-4' onClick={Add}>add</button>
          <button onClick={Remove}>remove</button>
          </div>
    </>
  )
}

export default Conter