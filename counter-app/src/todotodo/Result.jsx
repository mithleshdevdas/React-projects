import React from 'react'
import { Provider } from 'react-redux'
import  {store}  from './store'
import AddTodo from './AddTodo'
import Todosss from './Todosss'

function Result() {
  return (
      <Provider store={ store }>
          <AddTodo />
          <Todosss/>
    </Provider>
  )
}

export default Result