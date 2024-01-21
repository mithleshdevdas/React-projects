// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Todoprovider } from "./Contexts";
import { TodoForm, TodoItems } from "./Componets";

function SetupTodo() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };
  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    settodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Todoprovider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen py-8">
        <div className="w-full max-w-2xl  p-4 text-black">
          <h1 className="text-center">manage your todos </h1>
                  <div className="mb-4">{/* todo form */ }
                      <TodoForm/>
                  </div>
          <div className="flex flex-wrap gap-y-3">
                      {/* loop and add todoitems */ }
                      { todos.map((todo) => (<div key={ todo.id }
                          className="w-full"
                      >
                          <TodoItems todo={todo} />
                      </div>))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default SetupTodo;

// 
// 
