import React, {useEffect} from 'react';
import Body from './body/Body';
import './App.css';
import getColections from './services/operators';
import { useDispatch } from 'react-redux';
import store from './redux/store';
import { todoAdded } from './features/todoSlice';

function App() {
  const dispach = useDispatch()

  useEffect(() => {
    async function newList(){
      
      try{
        const docRef = await getColections("tasks")
        const data1 = store.getState()
        const list = data1.todos 
        if(list.length === 0){
          /* console.log("app docRef:", docRef)
          console.log("app list:", list) */
          docRef.map((task) => {
            return dispach(todoAdded(task));
          })
        }
      }catch (error){
        console.error(`recuest faild`);
      }
    }
    
    newList();
    
    
  },[dispach]);

  return (
    <div className="App">
      <div className="top-bar">Redux Fundamentals Example</div>
      <div className="todos">Todos</div>
      <Body />
    </div>
  );
}

export default App;
