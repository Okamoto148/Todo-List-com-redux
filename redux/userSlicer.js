import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'listaTodo',

  initialState:{
    editar:true,
    listaTodo:[],
  },
  reducers:{
    changeLista(state,{payload}){
      
      return{
        ...state, listaTodo: payload, editar: false
    }
  },
    voltar2(state){
      return{
        ...state, editar: true
      }
    }
  }
  
})

export const {changeLista} =slice.actions;
export const {voltar2} =slice.actions;
export default slice.reducer;
export const selectListaTodo = (state) =>state.listaTodo;

