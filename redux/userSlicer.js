import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'listaTodo',

  initialState:{
    listaTodo:[],
  },
  reducers:{
    changeUser(state,{payload}){
      
      return{
        ...state, listaTodo: payload
    }
  }
  }
  
})

export const {changeUser} =slice.actions;
export default slice.reducer;
export const selectListaTodo = (state) =>state.listaTodo;
