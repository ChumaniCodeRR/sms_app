import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './modal.css'


export default function Deposit({open ,handleClickOpen}) {

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">DEPOSIT CREDITS</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className="text-dark">Please enter the amount if credits you wish to deposit.</p>
            <div className="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOpen} color="default">
            Cancel
          </Button>
          <Button onClick={handleClickOpen} color="default" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
