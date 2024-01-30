import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
  return (
      <>
          <ul className='list-none'>
              { todos.map((todo) => (
                  <li key={ todo.id }>
                      <div>{ todo.text }</div>
                      <button onClick={()=>dispatch(removeTodo(todo.id))}>✖</button>
                  </li>
              ))}
          </ul>
    </>
  )
}

export default Todos