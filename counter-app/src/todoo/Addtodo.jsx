import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function Addtodo() {
    const [input, setinput] = useState('')
     const dispatch = useDispatch()

    const addtodohandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setinput('')
    }
  return (
      <>
          <form onSubmit={ addtodohandler }>
              
              <input type="text"
                  value={ input }
                  onChange={(e)=>setinput(e.target.value)}
                  
              />
              <button type='submit'>add</button>
          </form>
 </>
  )
}

export default Addtodo