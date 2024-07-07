/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../context/TodoProvider'

function TodoList() {
  return (
    <div className="list">
    <div className="mt-3">
    <TodoContext.Consumer>
      {state=>state.todoList.map((todo)=> <TodoItem key={todo.id} todo={todo}/>)}
    </TodoContext.Consumer>
        
       
    </div>
    </div>
    
  )
}

export default TodoList