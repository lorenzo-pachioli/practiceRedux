import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import filterReducer from '../features/filterSlice';

const rootReducer = {
  
  reducer: {
    todos: todoReducer, 
    filter: filterReducer
  },
}

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

export default configureStore(rootReducer, preloadedState);