import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from './todoSlice';

function Todos() {
  // @ts-ignore
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="m-4  bg-gray-400"
            key={todo.id}
          >
            <div className="text-black">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-800 "
            >
             remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
