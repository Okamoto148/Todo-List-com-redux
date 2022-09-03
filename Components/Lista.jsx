import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@mui/material/Button';
import {useSelector,useDispatch} from 'react-redux';
import { selectListaTodo } from '../redux/userSlicer';
import {changeLista} from '../redux/userSlicer';
import {editar2} from '../redux/userSlicer';
import EditIcon from '@mui/icons-material/Edit';




export default function Lista({voltar}) {
  const listaTodo=useSelector(selectListaTodo).listaTodo;
  const dispatch =useDispatch();
  console.log(listaTodo);

  
  const apagar=(index)=>{
    const lista = [...listaTodo];
    lista.splice(index,1);
    dispatch(changeLista(lista));
localStorage.setItem("listaTodo",JSON.stringify(lista));
  };

  function editar(index){
    const lista = listaTodo[index]
   dispatch(editar2(lista));
  }


  return (

        <Grid item xs={12}>
              
  {listaTodo.map((item,index)=><div key={index}>
    <List>
    <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon onClick={()=>editar(index)}/>
                      <DeleteIcon onClick={()=>apagar(index)}/>
                      
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
      <Typography>{item.todo}</Typography>
            
                </ListItem>
              
            </List></div>)}
                
          <Button variant="contained" sx={{mt: 1}} onClick={voltar} >Voltar</Button>
        </Grid>
 
  );
}