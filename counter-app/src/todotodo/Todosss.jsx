import React from 'react'
    import {useSelector,useDispatch} from 'react-redux'
import { remove } from './todoslice';
    
function Todosss() {
    // @ts-ignore
    const todos = useSelector((state) => state.todos);  
    
    const dispatch = useDispatch()

      return (
        <>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                    <div>{ todo.text }</div>
                    <button onClick={()=>dispatch(remove(todo.id))}>✖</button>
              </li>
            ))}
          </ul>
        </>
      );
    }
    
    export default Todosss