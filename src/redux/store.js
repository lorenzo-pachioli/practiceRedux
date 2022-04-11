import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import filterReducer from '../features/filterSlice';

const rootReducer = {
  
  reducer: {
    todos: todoReducer, 
    filter: filterReducer
  },
}
export default configureStore(rootReducer);

