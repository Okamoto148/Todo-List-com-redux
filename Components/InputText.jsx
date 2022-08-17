import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InputText({onChangeInput,gravar, value="value"}){

    function handleInput(event){
    onChangeInput(event.currentTarget.value)
  };

  return(
  <>

    <Typography sx={{ display: 'flex',flexDirection: 'column', mt:1  }} >
  <TextField id="outlined-basic" label="Tarefas" variant="outlined" onChange={handleInput} value={value}/>

      <Button variant="contained" sx={{mt: 1, width: "100px"}} onClick={gravar} >Gravar</Button>
      </Typography>
    </>
    )
}