import React from 'react';
import Card from './card/Card';
import { useSelector} from 'react-redux'
import './index.css';

export default function List() {
  

  const filters = useSelector((state) => state.filter)
  const list = useSelector((state) => state.todos)
  

  const ShoWResults = ()=> {

    let list2 = [];

    
    if(list){

      /* Filtro por color */
      if(filters.colors.length > 0){
        list2 = list.filter((task)=> {
          return (filters.colors.some((color)=> color === task.color))
      } );
      }else if (filters.colors.length === 0){
        list2 = list
      }

      /* Filtro por status */
      if(filters.status === "Active"){
        list2 = list2.filter((task) => task.completed === false)
      }else if(filters.status === "Completed"){
        list2 =  list2.filter((task) => task.completed === true)
      }else{ 
        list2 = list
      }
    } 

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


