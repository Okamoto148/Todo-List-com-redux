import * as React from 'react';
import './App.css';
import Header from  '../Components/Header';
import Lista from '../Components/Lista';
import InputText from '../Components/InputText'
import {useState} from 'react';
import {changeUser} from '../redux/userSlicer';
import {useDispatch} from 'react-redux';
import { selectListaTodo } from '../redux/userSlicer';
import {useSelector} from 'react-redux';


function App() {
const [editar, setEditar]=useState(true);
const [todo,setTodo]=useState("");
const [id,setId]=useState(0);
const dispatch =useDispatch();
const listaTodo=useSelector(selectListaTodo).listaTodo;

  


const index = (index) => {
        apagar(index);
      };




  

  function gravar(){
  const lista = [...listaTodo, {todo: todo, id: id}];
  setId(id+1);
  dispatch(changeUser(lista));
  setEditar(false);
  setTodo("");
    
  };

  function voltar(){
     setEditar(true);
  };

  function apagar(index){
    const lista = [...listaTodo];
    lista.splice(index,1);
    setListaTodo(lista);
    dispatch(changeUser(lista));
    
  };



  
  return (

   <>
     <Header/>
     {editar && (
                <InputText  onChangeInput={(e)=>setTodo(e)} gravar={gravar} value={todo} />
                       )}
     {!editar && <Lista voltar={voltar}/>}

   </>
  
  )
}

export default App;