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

export default function CreateContactPage() {
  const classes = useStyles();
  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h5>Add a Contact</h5>
          <form>
            <div className="form-group">
              <label>Contact list name</label>
              <input
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label >
                Select account 
              </label>
              <select className="form-control" >
                <option>-- Select account --</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label >Contact Description</label>
              <textarea
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
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
