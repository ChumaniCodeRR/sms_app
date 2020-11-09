import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from '../../layout/navbar';
import FooterPage from '../../layout/footer';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function ViewEditContactPage() {
  const classes = useStyles();
  

  return (
    <div>
        <Navbar/>
        <div className={classes.paper}>
     <br/>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          
          <div class="row">
              <div class="col">
              <h5>Update a Contact</h5>
              </div>
              <div class="col">
                <Link to="view-conctact">
                <button type="button" class="btn btn-outline-secondary float-right mb-2">back</button>
                </Link>
              
              </div>
            </div>
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
              Update Contact
            </button>
          </form>
        </Paper>
      </Grid>
    </div>
    <FooterPage/>
    </div>
    
  );
}
