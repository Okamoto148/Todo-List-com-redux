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
import {useState} from 'react';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@mui/material/Button';
import {useSelector,useDispatch} from 'react-redux';
import { selectListaTodo } from '../redux/userSlicer';
import {changeUser} from '../redux/userSlicer';


export default function Lista({voltar}) {
  const listaTodo=useSelector(selectListaTodo).listaTodo;
  const dispatch =useDispatch();
  console.log(listaTodo);

  
  const apagar=(index)=>{
    const lista = [...listaTodo];
    lista.splice(index,1);
    dispatch(changeUser(lista));
  }

  return (

        <Grid item xs={12}>
              
  {listaTodo.map((item,index)=><div key={index}>
    <List>
    <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
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