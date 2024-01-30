import React, { useState } from "react";

import { useDispatch } from 'react-redux'

import {addTodo} from './todoSlice'

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput(' ')
  };
  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          className="m-2  border border-gray-800   "
          type="text"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-green-800 m-2 p-1 rounded">
          addtodo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
