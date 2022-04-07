import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import filterReducer from '../features/filterSlice';


export default configureStore({
  
    reducer: {
      todos: todoReducer, 
      filter: filterReducer
    },
  }, console.log("store"));