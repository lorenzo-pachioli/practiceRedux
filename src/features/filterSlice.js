import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
    status: "All",
    colors: []
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        statusFilter(state, action){
            state.status = action.payload.status
        }, 
        statusColor(state, action){
            const check = state.colors.some((color)=> color === action.payload.color)
            if(check){
                state.colors = state.colors.filter((colr)=> colr !== action.payload.color)
            }else{
                state.colors.push(action.payload.color)
            }
            
        }
    }
})

export const {statusFilter, statusColor } = filterSlice.actions;

export default filterSlice.reducer;