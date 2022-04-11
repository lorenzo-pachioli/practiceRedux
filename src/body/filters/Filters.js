import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {todoCleared, todoCompleted} from '../../features/todoSlice';
import {statusFilter, statusColor } from '../../features/filterSlice';
import './index.css';
import { update } from '../../services/operators';

function Filters() {

  const list = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  const handleCompleted = ()=> {
    dispatch(todoCompleted())
    list.map(async (task)=> {
      const docRef = await update("tasks", task.id, {completed: true})
      return docRef;
    })
  }
  const handleCleared = ()=> {
    dispatch(todoCleared())
    list.map(async (task)=> {
      const docRef = await update("tasks", task.id, {completed: false})
      return docRef;
    })
  }

  const Square = ({color}) => {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
           width="22" height="20" viewBox="0 0 120 100">
        <rect x="10" y="10" width="100" height="80" rx="20" ry="20"
              fill={color} />
      </svg>
    )
  }

  return (
    <div className="container-filter">

      <div  className="sub-container-filter">
        <h5>Actions </h5>
        <button onClick={handleCompleted}>Mark all completed</button>
        <button onClick={handleCleared}>Clear all completed</button>
      </div>

      <div  className="sub-container-filter">
        <h5>Remaining Todos</h5>
        <p>{list.length} item left</p>
      </div>

      <div  className="sub-container-filter">
        <h5>Filter by status</h5>
        <select name='status' id='status'>
          <option value="All" onClick={(e)=>dispatch(statusFilter({status: "All"}))}>All</option>
          <option value="Active" onClick={(e)=>dispatch(statusFilter({status: "Active"}))}>Active</option>
          <option value="Completed" onClick={(e)=>dispatch(statusFilter({status: "Completed"}))}>Completed</option>
        </select>
      </div>

      <div  className="sub-container-filter colors">
        <h5>Filter by color</h5>
        <div>
          <input type='checkbox' id="red" value="red" onChange={(e)=>dispatch(statusColor({color: "#F50D5A"}))}/>
          <Square color={"#F50D5A"} />
          <label htmlFor="red">Red</label>
        </div>
        
        <div>
          <input type='checkbox' id="orange" onChange={(e)=>dispatch(statusColor({color:"#FF865C"}))}/>
          <Square color={"#FF865C"} />
          <label htmlFor="orange">Orange</label>
        </div>
        
        <div>
          <input type='checkbox' id="yellow" onChange={(e)=>dispatch(statusColor({color: "#FFEA5C"}))}/>
          <Square color={"#FFEA5C"} />
          <label htmlFor="yellow">Yellow</label>
        </div>
        
        <div>
          <input type='checkbox' id="green" onChange={(e)=>dispatch(statusColor({color: "#00DA76"}))}/>
          <Square color={"#00DA76"} />
          <label htmlFor="green">Green</label>
        </div>
        
        
      </div> 
    </div>
  );
}

export default Filters;