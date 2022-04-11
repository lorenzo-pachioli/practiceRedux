import React, {useState} from 'react';
import List from './list/List';
import Filters from './filters/Filters';
import { useDispatch} from 'react-redux';
import {todoAdded} from '../features/todoSlice';
import './index.css';
import { setDocument } from '../services/operators';
import store from '../redux/store';

function Body() {

  const dispatch = useDispatch();
  const [task, setTask] = useState('')
  

  const handeleEnter = async (e) => {
    if(e.keyCode === 13){
      const data= store.getState()
      const order = data.todos.length + 1
      const obj = {
        text:e.target.value, 
        color:"",
        completed: false, 
        order: order
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