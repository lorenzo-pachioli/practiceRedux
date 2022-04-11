import React, {useState} from 'react';
import List from './list/List';
import Filters from './filters/Filters';
import { useDispatch} from 'react-redux';
import {todoAdded} from '../features/todoSlice';
import store from '../redux/store';
import './index.css';
import { setDocument } from '../services/operators';

function Body() {

  const dispatch = useDispatch();
  const [task, setTask] = useState('')
  
  /* function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  } */

  const handeleEnter = async (e) => {
    if(e.keyCode === 13){
      
      const obj = {
        text:e.target.value, 
        color:"",
        completed: false
      }
      const docRef = await setDocument("tasks", obj)
      setTask("");
      dispatch(todoAdded({...obj, id:docRef.id,}))
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