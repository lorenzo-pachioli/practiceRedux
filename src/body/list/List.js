import React from 'react';
import Card from './card/Card';
import { useSelector} from 'react-redux'
import './index.css';

function List() {
  
  const list = useSelector((state) => state.todos)
  console.log(list)
  const ShoWResults = ()=> {
    if (list.length > 0){
      return (list.map((task)=>{
        return (
          <Card text={task.text} key={list.indexOf(task)} color={task.color} completed={task.completed} id={task.id}/>
        )
      }) )
    }else{
      return <p>empty list</p>
    }
  }

  return (
    <div className="container-list">
      <ShoWResults />
        
    </div>
  );
}

export default List;
