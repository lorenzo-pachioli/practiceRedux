import React from 'react';
import { useSelector} from 'react-redux'
import './index.css';

function Filters() {

  const list = useSelector((state) => state.todos)

  return (
    <div className="container-filter">

      <div  className="sub-container-filter">
        <h5>Actions </h5>
        <button>Mark all completed</button>
        <button>Clear all completed</button>
      </div>

      <div  className="sub-container-filter">
        <h5>Remaining Todos</h5>
        <p>{list.length} item left</p>
      </div>

      <div  className="sub-container-filter">
        <h5>Filter by status</h5>
        <select name='status' id='status'>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div  className="sub-container-filter colors">
        <h5>Filter by color</h5>
        <div>
          <input type='checkbox' id="red"/>
          <label htmlFor="red">Red</label>
        </div>
        
        <div>
          <input type='checkbox' id="orange"/>
          <label htmlFor="orange">Orange</label>
        </div>
        
        <div>
          <input type='checkbox' id="yellow"/>
          <label htmlFor="yellow">Yellow</label>
        </div>
        
        <div>
          <input type='checkbox' id="green"/>
          <label htmlFor="green">Green</label>
        </div>
        
        
      </div> 
    </div>
  );
}

export default Filters;