import React from 'react';
import Card from './card/Card';
import { useSelector} from 'react-redux'
import './index.css';

export default function List() {
  

  const filters = useSelector((state) => state.filter)
  const list = useSelector((state) => state.todos)
  

  const ShoWResults = ()=> {
    let list2 = [];


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
      }
    

      if (list2.length > 0){
      return (list2.map((task)=>{
        return (
          <Card text={task.text} key={list.indexOf(task)} color={task.color} completed={task.completed} order={task.order} id={task.id}/>
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


