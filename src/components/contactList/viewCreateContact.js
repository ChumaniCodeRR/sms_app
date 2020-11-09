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

export default function ViewCreateContactPage() {
  const classes = useStyles();
  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <h5>Create Contact</h5>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>MSISDN Number</label>
              <input
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Custom Field</label>
              <input
                type="email"
                className="form-control"
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Create Contact
            </button>
          </form>
        </Paper>
      </Grid>
    </div>
    <FooterPage/>
    </div>
    
  );
}
