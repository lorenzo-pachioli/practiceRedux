import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
    status: 'All',
    colors: []
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        statusFilter(state, action){
            state.status = action.payload
        }, 
        statusColor(state, action){
            if(action.payload.changeType === "add"){
                state.colors.push(action.payload.color)
            }else if(action.payload.changeType){
                state.colors.pull(action.payload.color)
            }
        }
    }
})

export const {statusFilter, statusColor } = filterSlice.actions;

export default filterSlice.reducer;