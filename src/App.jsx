import * as React from 'react';
import './App.css';
import Header from  '../Components/Header';
import Lista from '../Components/Lista';
import InputText from '../Components/InputText'
import {useState, useEffect} from 'react';
import {changeLista} from '../redux/userSlicer';
import {useDispatch} from 'react-redux';
import { selectListaTodo } from '../redux/userSlicer';
import {useSelector} from 'react-redux';
import {voltar2} from '../redux/userSlicer';
import {editarGravar} from '../redux/userSlicer';
import {editar2} from '../redux/userSlicer';
import { dialogNovo } from '../redux/userSlicer';
import {fechar} from '../redux/userSlicer';





function App() {
const [id,setId]=useState(0);
const dispatch =useDispatch();
const listaTodo=useSelector(selectListaTodo).listaTodo;
const editar=useSelector(selectListaTodo).editar;
const todo2=useSelector(selectListaTodo).todo;
const [todo,setTodo]=useState("");
const open=useSelector(selectListaTodo).open;


useEffect(()=>{
  if(todo2){
    setTodo(todo2.todo);
  }else{
    setTodo("");
  }
  
},[todo2])



useEffect(()=>{
  const lista = localStorage.getItem("listaTodo");
  if(lista){
  dispatch(changeLista(JSON.parse(lista)));
    }

  const id2=localStorage.getItem("id");

  if(id2){
    setId(id2)
  }


},[]);




  function gravar(){
  
    if(!todo){
  dispatch(dialogNovo());
    }else if(todo2.id){
     console.log(todo2)
      const lista = {todo: todo, id: todo2.id};
      
      dispatch(editarGravar(lista));
     
      
      
    }else{
  const lista = [...listaTodo, {todo: todo, id: id}];
  setId(id+1);
  dispatch(changeLista(lista));
  localStorage.setItem("listaTodo",JSON.stringify(lista));
  localStorage.setItem("id",id);
  
      }
    
  };




  
  return (

   <>
     <Header/>
     {editar && (
                <InputText  onChangeInput={(e)=>setTodo(e)} gravar={gravar} value={todo} open={open} handleClose={()=>dispatch(fechar())}/>
                       )}
     {!editar && <Lista voltar={()=>dispatch(voltar2())}/>}

   </>
  
  )
}

export default App;