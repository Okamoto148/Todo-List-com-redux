import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'listaTodo',

  initialState:{
    editar:true,
    listaTodo:[],
    open: false,
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
    },
    fechar(state){
      return{
        ...state, open: false
      }
    },
        dialogNovo(state){
      return{
        ...state, open: true
      }
    }
  }
  
})

export const {changeLista} =slice.actions;
export const {voltar2} =slice.actions;
export default slice.reducer;
export const selectListaTodo = (state) =>state.listaTodo;
export const {dialogNovo} = slice.actions;
export const {fechar} = slice.actions;

