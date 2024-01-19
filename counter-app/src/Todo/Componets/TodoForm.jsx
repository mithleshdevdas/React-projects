import React, { useState } from "react";
import { useTodo } from "../Contexts";

function TodoForm() {
    const [todo, settodo] = useState('')

    const { addTodo } = useTodo()
    
    const add = (e) => {
        e.preventDefault()

        if (!todo) return
        addTodo({ todo, completed: false })
        settodo('')
    }
    

  return (
    <>
      <form  onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="write todo"
                  className="w-full border border-black/10 p-2 bg-white/20"
                  value={ todo}
                  onChange={(e)=>settodo(e.target.value)}
                  
        />
        <button type="submit" className="bg-green-600 tex-white p-1">
       
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
