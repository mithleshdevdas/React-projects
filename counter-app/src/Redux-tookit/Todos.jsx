import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from './todoSlice'

function Todos() {

    // @ts-ignore
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch()
    
  return (
    <>
      <ul className='list-none'>
        {todos.map((todo) => (
          <li className=" m-4 bg-black flex items-center justify-between p-1 w-60 " key={todo.id}>
            <div className="text-white">{ todo.text }</div>
            
            
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-800  rounded m-1"
            >
            ✖
            </button>

          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos