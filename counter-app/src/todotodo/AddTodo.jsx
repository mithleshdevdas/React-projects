import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./todoslice";
function AddTodo() {
    const [input, setinput] = useState('')
    const dispatch = useDispatch()
    const handler = (e) => {
        e.preventDefault()
        dispatch(add(input))
        setinput( '')
  };
  return (
    <>
          <form onSubmit={ handler }>
              <input type="text"
          value={ input }
          onChange={ (e) => setinput(e.target.value)
          
          }
          className="border border-gray-800"
                  
              />
              <button type="submit">✔</button>
      </form>
    </>
  );
}

export default AddTodo;
