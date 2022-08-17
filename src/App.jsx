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




function App() {
const [todo,setTodo]=useState("");
const [id,setId]=useState(0);
const dispatch =useDispatch();
const listaTodo=useSelector(selectListaTodo).listaTodo;
const editar=useSelector(selectListaTodo).editar;

useEffect(()=>{
  const lista = localStorage.getItem("listaTodo");
  if(lista){
  dispatch(changeLista(JSON.parse(lista)));
    }
},[]);

  


  function gravar(){
  const lista = [...listaTodo, {todo: todo, id: id}];
  setId(id+1);
  dispatch(changeLista(lista));
  setTodo("");
  localStorage.setItem("listaTodo",JSON.stringify(lista));
    
  };




  
  return (

   <>
     <Header/>
     {editar && (
                <InputText  onChangeInput={(e)=>setTodo(e)} gravar={gravar} value={todo} />
                       )}
     {!editar && <Lista voltar={()=>dispatch(voltar2())}/>}

   </>
  
  )
}

export default App;