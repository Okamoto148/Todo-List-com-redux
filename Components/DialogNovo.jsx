import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


//Componente Dialog
export default function DialogNovo({informacao,titulo,open, handleClickOpen, handleClose, botao}) {



  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {titulo}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {informacao}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Voltar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}