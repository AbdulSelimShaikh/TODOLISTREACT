/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './todo-item.css';
import { TodoContext } from '../context/TodoProvider';


function TodoItem({todo}) {
  const [toggleUpdate,setToggleUpdate]=useState(false);
  const todoContext=useContext(TodoContext);
  const[name,setName]=useState(todo.title);
  return (
   
    <div className="todo-item row align-items-center justify-content-between">
    <div className="id">#{todo.id[0]}</div>
    {
      toggleUpdate?
      <input
      value={name}
      onChange={(e)=>setName(e.target.value)}
       className="w-50 form-control" type="text"/>:
    <div className="title">{todo.title}</div>
    }
    <div className="button">
    <div 
        onClick={()=>{
          setToggleUpdate(!toggleUpdate);
          if(name!=''){
            todoContext.updateTodo({
              id:todo.id,
              title:name
            });
            setName("");
          }
        }}
        className="btn btn-primary">
          {
            toggleUpdate?"UPDATE":"EDIT"
          }
        </div>
      
      <div
        onClick={()=>{
          todoContext.removeTodo(todo.id);
        }}
       className="ml-2 btn btn-danger">DELETE</div>
    </div>
        
    </div>
  )
}

export default TodoItem