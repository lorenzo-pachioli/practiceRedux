import {  createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import getColections, { setDocument} from '../services/operators';



export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try{
    const docRef = await getColections("tasks")
      console.log("app docRef:", docRef)
      docRef.map((task) => {
        return useDispatch(todoAdded(task))
      })
  }catch (error){
    console.error(`recuest faild`);
  }
})

/* export const saveNewTodo = createAsyncThunk('todos/saveNewTodo', async text => {
  const initialTodo = { 
    text: text, 
    color: "", 
    completed:false
  }
  const response = await setDocument("tasks", initialTodo)
  return response
}); */



export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  // The `reducers` field lets us define reducers and generate associated actions
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        return 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        let newEntities = [];
        newEntities = action.payload
        console.log(newEntities)
        return [
          ...state, 
          newEntities
        ]
      })/* 
      .addCase(saveNewTodo.fulfilled, (state, action) => {
        const todo = action.payload
        state.push(todo)
      }) */
  }
  
});

export const {todoAdded, todoToggled,todoDelete, todoColorSelected, todoCompleted, todoCleared, todoUpDate } = todoSlice.actions;



export default todoSlice.reducer;
