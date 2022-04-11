import {  createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action){
      return [
        ...state, 
        {
          text: action.payload.text,
          color:"",
          completed: false, 
          id: action.payload.id
        }
      ]
    },
    todoToggled(state, action){
      const todos = state.find(todo => todo.id === action.payload.id)
      const position = state.indexOf(todos)
      todos.completed = !todos.completed
      state.splice(position,1,todos)
    },
    todoDelete(state, action){
      const todo = state.find(todo => todo.id === action.payload.id)
      const position = state.indexOf(todo)
      state.splice(position,1)

    },
    todoColorSelected(state, action){
      const todo = state.find(todo => todo.id === action.payload.id)
      todo.color = action.payload.color
    },
    todoCompleted(state){
      state.map((todo)=> todo.completed = true)
    },
    todoCleared(state){
      state.map((todo) =>  todo.completed = false )
    }
  }
  
});

export const {todoAdded, todoToggled,todoDelete, todoColorSelected, todoCompleted, todoCleared, todoUpDate } = todoSlice.actions;



export default todoSlice.reducer;
