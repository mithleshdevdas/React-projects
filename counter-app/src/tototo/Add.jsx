import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addtodo } from './todoSlice'

function Add() {
    const [input, setinput] = useState('')
    const dispach = useDispatch()
    const addtodohandler = (e) => {
        e.preventDefault()
        dispach(addtodo(input))
        setinput('')
}
    
    return (
        <>
            <form onSubmit={ addtodohandler }>
                <input type="text"
                    value={ input }
                    onChange={(e)=> setinput(e.target.value)}

                />
                <button type='submit'>add</button>
         </form>   
      </>
  )
}

export default Add