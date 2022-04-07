import React from 'react';
import { useDispatch} from 'react-redux';
import {todoToggled,todoDelete, todoColorSelected} from '../../../features/todoSlice';
import './index.css';

function Card({text, color, completed, id}) {

  const dispatch = useDispatch();
  console.log(completed)
  return (
    <div className="container-card">
      <div className='subcontainer-card'>
        <input type="checkbox" checked={completed} onChange={(e)=>dispatch(todoToggled({id:id}))}/>
        <p>{text}</p>
      </div>
        
      <div className='subcontainer-card'>
        <select name='colors' id='colors' defaultValue={color}>
            <option value='red' onClick={(e)=>dispatch(todoColorSelected({id:id,color: e.target.value}))}>Red</option>
            <option value='orange' onClick={(e)=>dispatch(todoColorSelected({id:id,color: e.target.value}))}>orange</option>
            <option value='yellow'onClick={(e)=>dispatch(todoColorSelected({id:id,color: e.target.value}))}>yellow</option>
            <option value='green'onClick={(e)=>dispatch(todoColorSelected({id:id,color: e.target.value}))}>green</option>
        </select>
        <button onClick={(e)=>dispatch(todoDelete({id:id}))}>X</button>
      </div>
        
    </div>
  );
}

export default Card;