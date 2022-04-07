import {  createSlice } from '@reduxjs/toolkit';




/* export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
); */

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    todoAdded(state, action){
      console.log(state)
      state.push(action.payload)
    },
    todoToggled(state, action){
      const todos = state.find(todo => todo.id === action.payload.id)
      const position = state.indexOf(todos)
      todos.completed = !todos.completed
      console.log(todos.completed)
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

export const {todoAdded, todoToggled,todoDelete, todoColorSelected, todoCompleted, todoCleared } = todoSlice.actions;



console.log(todoSlice.reducer)
export default todoSlice.reducer;
