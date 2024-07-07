/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoProvider'
import { v1 } from 'uuid';

function TodoInput() {
  const[name,setName]=useState("")
   var todoContext=useContext(TodoContext);
  return (
    <div className="row">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="ex.do coding" className="col from-contrl" type="text"/>
        <div 
        onClick={()=>{
          if(name!=""){
            todoContext.addTodo({
              id:v1(),
              title:name
            })
            setName("");
          }
        }}
        
        className="ml-2 btn btn-primary">Add</div>
    </div>
  )
}

export default TodoInput