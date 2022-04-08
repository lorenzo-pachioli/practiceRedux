import React, {useState} from 'react';
import Card from './card/Card';
import { useSelector} from 'react-redux'
import './index.css';

export default function List() {
  
  const list = useSelector((state) => state.todos)
  const filters = useSelector((state) => state.filter)
 

  const ShoWResults = ()=> {

    let list2 = [];
    if(filters.colors.length > 0){
      list2 = list.filter((task)=> {
        return (filters.colors.some((color)=> color === task.color))
     } );
    }else{
      list2 = list
    }

    console.log(filters.status);
    console.log(filters.colors);

  
    if(filters.status === "Active"){
      list2 = list2.filter((task) => task.completed === false)
      console.log("2")
    }else if(filters.status === "Completed"){
      list2 =  list2.filter((task) => task.completed === true)
      console.log("3")
    }else{ 
      console.log("1")
    }
    

    console.log(list2)
    
    if (list2.length > 0){
     return (list2.map((task)=>{
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


