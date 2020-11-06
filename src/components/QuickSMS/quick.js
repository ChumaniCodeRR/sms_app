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

export default function SmsPage() {
  const classes = useStyles();
  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h3>Send Quick SMS</h3>
          <form>
            <div class="form-group">
              <label>Mobile Number</label>
              <input
                type="email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label >
                Select account to send from
              </label>
              <select class="form-control" >
                <option>-- Select account --</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label >Message</label>
              <textarea
                class="form-control"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </Paper>
      </Grid>
    </div>
    <FooterPage/>
    </div>
    
  );
}
