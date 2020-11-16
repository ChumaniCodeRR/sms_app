import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from '../../layout/navbar';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

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
              <h5>UPDATE A CONTACT</h5>
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
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                 Update Contact
              </Button>
            
          </form>
        </Paper>
      </Grid>
    </div>
   
    </div>
    
  );
}
