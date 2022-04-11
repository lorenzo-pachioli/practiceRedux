import React from 'react';
import { useDispatch} from 'react-redux';
import {todoToggled,todoDelete, todoColorSelected} from '../../../features/todoSlice';
import './index.css';
import { deleteDocument, update } from '../../../services/operators';

function Card({text, color, completed, id}) {

  const dispatch = useDispatch();
  
  const handleDelete = async () => {
    dispatch(todoDelete({id:id}))
    const docRef = await deleteDocument("tasks", id)
    
    return docRef;
  }

  const handleComplete = async () => {
    dispatch(todoToggled({id:id}))
    const docRef = await update("tasks", id, {completed: !completed})
    
    return docRef;
  }

  const handleColor = async (e) => {
    dispatch(todoColorSelected({id:id,color: e.target.value}))
    const docRef = await update("tasks", id, {color: e.target.value})
    
    return docRef;
  }

  
  return (
    <div className="container-card">
      <div className='subcontainer-card'>
        <input type="checkbox" checked={completed} onChange={handleComplete}/>
        <p>{text}</p>
      </div>
        
      <div className='subcontainer-card'>
        <select name='colors' id='colors' defaultValue={color} style={{color:`${color}`, fontWeight: "800"}}>
            <option value='' onClick={handleColor}>None</option>
            <option value='#F50D5A' onClick={handleColor}>Red</option>
            <option value='#FF865C' onClick={handleColor}>orange</option>
            <option value='#FFEA5C' onClick={handleColor}>yellow</option>
            <option value='#00DA76' onClick={handleColor}>green</option>
        </select>
        <button onClick={handleDelete} color="#F50D5A">X</button>
      </div>
        
    </div>
  );
}

export default Card;