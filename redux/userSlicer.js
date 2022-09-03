import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'listaTodo',

  initialState:{
    editar:true,
    listaTodo:[],
    open: false,
    todo: {},
  },
  reducers:{
    changeLista(state,{payload}){
      
      return{
        ...state, listaTodo: payload, editar: false
    }
  },
    voltar2(state){
      return{
        ...state, editar: true, todo:""
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
        },
    
        editar2(state, {payload}){
          return {
            ...state,  editar: true, todo: {todo:payload.todo, id:payload.id}
          }
        },
    
    editarGravar(state,{payload}){
      return {
        ...state,

        listaTodo: state.listaTodo.map(todo => {
          // If this isn't the todo item we're looking for, leave it alone
          
          if (todo.id !== payload.id) {
            return todo
            // Flip the completed flag
 
    }

          // We've found the todo that has to change. Return a copy:
          return {
       ...todo,
            todo:payload.todo
            
          }
        }), editar:false
                } 
    },
   
    
  }
  
})

export const {changeLista} =slice.actions;
export const {gravaTodo} =slice.actions;
export const {editar2} =slice.actions;
export const {voltar2} =slice.actions;
export const {editarGravar} =slice.actions;
export default slice.reducer;
export const selectListaTodo = (state) =>state.listaTodo;
export const {dialogNovo} = slice.actions;
export const {fechar} = slice.actions;

