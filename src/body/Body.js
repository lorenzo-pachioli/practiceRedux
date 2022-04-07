import React, {useState} from 'react';
import List from './list/List';
import Filters from './filters/Filters';
import { useDispatch, useSelector} from 'react-redux';
import {todoAdded} from '../features/todoSlice';
import './index.css';

function Body() {

  const dispatch = useDispatch();
  const list = useSelector((state) => state.todos)
  const [task, setTask] = useState('')
  
  function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

  const handeleEnter = (e) => {
    console.log(e.keyCode)
    if(e.keyCode === 13){
      console.log(e.target)
      setTask("");
      return dispatch(todoAdded({
        id:nextTodoId(list),
        text:e.target.value,
        completed:false, 
        color:"red"
      }))
    }
  }

  
  return (
    <div className="container-body">
      <input type="text" value={task} id='task' className='title-body' onChange={(e) =>setTask(e.target.value)} onKeyDown={handeleEnter} placeholder='What needs to be done?' />
      <List />
      <Filters />
    </div>
  );
}

export default Body;