import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from '../../layout/navbar';
import FooterPage from '../../layout/footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  
}));

export default function CreateAccountPage() {
  const classes = useStyles();
  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h3>Create new account</h3>
          <form>
            <div class="form-group">
              <label>Account Name</label>
              <input
                type="email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label >
                Account type
              </label>
              <select class="form-control" >
                <option>-- Select account type --</option>
                <option>Postpaid</option>
                <option>Prepaid</option>
              </select>
            </div>
            <div class="form-group">
              <label >Description</label>
              <textarea
                class="form-control"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Create Account
            </button>
          </form>
        </Paper>
      </Grid>
    </div>
    <FooterPage/>
    </div>
    
  );
}
