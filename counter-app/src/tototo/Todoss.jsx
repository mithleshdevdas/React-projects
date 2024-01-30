import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo } from './todoSlice'

function Todoss() {

    const todos = useSelector((state) => state.todos)
    const dispach = useDispatch()
  return (
      <>
          
          <ul>
              { todos.map((todo) => (
                  <li key={ todo.id }>
                      <div>{ todo.text }</div>
                      <button onClick={()=>dispach(removetodo(todo.id))}>✖</button>
                </li>
            ))}
        </ul>  

    </>
  )
}

export default Todoss